import BookCard from 'components/BookCard/BookCard'
import type { Book } from 'models/Book'
import { BEST_SELLERS } from 'src/mock/Books'
import type { ShelfItem } from '../../models/ShelfItem'
import './BookCatalog.css'

interface BookCatalogProps {
    shelf: ShelfItem[]
    onAddBook: (book: Book) => void
}

function BookCatalog ({ shelf, onAddBook }: BookCatalogProps) {
    const books = BEST_SELLERS

    return (
        <>
        <h1>Best Sellers</h1>
        <section className='catalog'>
            { books.map(b => <BookCard key={b.id} book={b} shelf={shelf} onAddBook={onAddBook} />)}
        </section>
        </>
    )
}

export default BookCatalog