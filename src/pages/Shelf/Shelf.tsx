import ShelfCard from 'components/ShelfCard/ShelfCard'
import type { ReadingStatus } from 'models/ReadingStatus'
import type { ShelfItem } from 'src/models/ShelfItem'
import './Shelf.css'

export interface ShelfProps {
    shelf: ShelfItem[]
    onStatusChange: (status: ReadingStatus, bookId: string) => void
}

function Shelf({ shelf, onStatusChange }: ShelfProps) {

    return (
        <>
            <h1>My shelf</h1>
            <section className='shelf'>
            { shelf.map(c => <ShelfCard key={c.book.id} shelf={c} onStatusChange={(status) => onStatusChange(status, c.book.id)} /> ) }
            </section>
        </>
    )
}

export default Shelf