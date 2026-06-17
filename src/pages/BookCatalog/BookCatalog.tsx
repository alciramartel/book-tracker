import BookCard from 'components/BookCard/BookCard'
import { BEST_SELLERS } from 'src/mock/Books'
import './BookCatalog.css'


function BookCatalog () {
    const books = BEST_SELLERS

    return (
        <>
            <h1>Best Sellers</h1>
            <section className='catalog'>
                { books.map(b => <BookCard key={b.id} book={b} />)}
            </section>
        </>
    )
}

export default BookCatalog