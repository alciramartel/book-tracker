import { type Book } from 'models/Book'
import { useShelf } from '../../context/ShelfContext'
import './BookCard.css'

interface BookCardProps {
  book: Book
}

function BookCard({ book }: BookCardProps) {

  const { shelf, updateBookshelf } = useShelf()

  function found(book: Book) {
    return shelf?.find(b => b.book.id == book.id)
  }

  return (
    <section className='book-card'>
      <img src={ book.cover } alt={book.title + ' cover'} draggable={false}/>
      <h4 className='book-title'>{ book.title }</h4>
      <div className='details'>
        <p>{ book.authors.join(', ') }</p>
        <div className='tags'>
          { book.categories.slice(0, 2).map(c => <span key={c} className='chip'>{c}</span> ) }
        </div>
      </div>
      <button role='button' className={ found(book) ? 'saved-btn btn' : 'add-btn btn' }  onClick={() => updateBookshelf(book) }>
        { found(book) ? 'In shelf' : '+ Add to shelf' } 
      </button>
    </section>
  )
}

export default BookCard
