import ShelfCard from 'components/ShelfCard/ShelfCard'
import type { Collection } from 'models/Collection'
import type { ReadingStatus } from 'models/ReadingStatus'
import './Shelf.css'

export interface ShelfProps {
    collection: Collection[]
    statusChanged: (status: ReadingStatus, bookId: string) => void
}

function Shelf({ collection, statusChanged }: ShelfProps) {

    return (
        <>
            <h1>My Collection</h1>
            <section className='collection'>
            { collection.map(c => <ShelfCard key={c.book.id} collection={c} statusChanged={(status) => statusChanged(status, c.book.id)} /> ) }
            </section>
        </>
    )
}

export default Shelf