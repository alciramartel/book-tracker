import type { Book } from 'models/Book'
import './ShelfCard.css'

export interface ShelfCardProps {
    book: Book
}

function ShelfCard({ book }: ShelfCardProps) {

    return (
        <>
            { book.title } 
        </>
    )
}

export default ShelfCard