import ShelfCard from 'components/ShelfCard/ShelfCard'
import type { Book } from 'models/Book'
import './Shelf.css'

export interface ShelfProps {
    collection: Book[]
}

function Shelf({ collection }: ShelfProps) {

    return (
        <>
            { collection.map(book => <ShelfCard key={book.id} book={book} /> ) }
        </>
    )
}

export default Shelf