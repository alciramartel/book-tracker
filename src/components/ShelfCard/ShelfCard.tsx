import type { Collection } from '../../models/Collection'
import type { ReadingStatus } from '../../models/ReadingStatus'
import './ShelfCard.css'

export interface ShelfCardProps {
    collection: Collection
    statusChanged: (status: ReadingStatus) => void
}

function ShelfCard({ collection, statusChanged }: ShelfCardProps) {
    const { book, status } = collection

    return (
        <>
            <section className='bookshelf-card'>
                <div className='img-container'>
                    <div onClick={() => statusChanged('want')} className={`bookmark ${status === 'want' ? 'filled' : ''}`}></div>
                    <div onClick={() => statusChanged('read')} className={`check ${status === 'read' ? 'filled' : ''}`}></div>
                    <div onClick={() => statusChanged('reading')} className={`chip ${status === 'reading' ? 'filled' : ''}`}>Reading</div>
                    <div className='overlay'></div>
                    <img src={ book.cover } alt={book.title + ' cover'} draggable={false} /> 
                </div>
                <h4 className='book-title'>{ book.title }</h4>
                <div className='details'>
                    <p>{ book.authors.join(', ') }</p>
                </div>
            </section>
        </>
    )
}

export default ShelfCard