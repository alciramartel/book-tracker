import BookCard from 'components/BookCard/BookCard'
import type { Book } from 'models/Book'
import { BEST_SELLERS } from 'src/mock/Books'
import type { Collection } from '../../models/Collection'
import './BookCatalog.css'

interface BookCatalogProps {
    collection: Collection[]
    buttonClicked: (book: Book) => void
}

function BookCatalog ({ collection, buttonClicked }: BookCatalogProps) {
    const books = BEST_SELLERS

    return (
        <>
        <h1>Best Sellers</h1>
        <section className='catalog'>
            { books.map(b => <BookCard key={b.id} book={b} collection={collection} buttonClicked={buttonClicked} />)}
        </section>
        </>
    )
}

export default BookCatalog