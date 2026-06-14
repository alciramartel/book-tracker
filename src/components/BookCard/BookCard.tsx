import { type Book } from 'models/Book'
import { type Collection } from 'models/Collection'
import './BookCard.css'

interface BookCardProps {
  book: Book
  collection: Collection[]
  buttonClicked: (book: Book) => void
}

function BookCard({ book, collection, buttonClicked }: BookCardProps) {

  // pop && <div style={{ position: 'absolute', top: -6, left: '50%', transform: 'translateX(-50%)', font: `900 18px ${G.sans}`, color: G.gold,
  //         textShadow: '0 2px 6px rgba(0,0,0,0.25)', animation: 'gpop .6s ease-out forwards', pointerEvents: 'none' }}>+{xpFor(book)} XP!</div>}

  function found(book: Book) {
    return collection?.find(b => b.book.id == book.id)
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
      <button role='button' className={ found(book) ? 'saved-btn btn' : 'add-btn btn' }  onClick={() => buttonClicked(book) }>
        { found(book) ? 'In collection' : '+ Add to shelf' } 
      </button>
    </section>
  )
}

export default BookCard
