import type { ReadingStatus } from '../../models/ReadingStatus'
import type { ShelfItem } from '../../models/ShelfItem'
import './ShelfCard.css'

export interface ShelfCardProps {
    shelf: ShelfItem
    onStatusChange: (status: ReadingStatus) => void
}

function ShelfCard({ shelf, onStatusChange }: ShelfCardProps) {
    const { book, status } = shelf

    return (
        <>
            <section className='bookshelf-card'>
                <div className='img-container'>
                    <button role='button' onClick={() => onStatusChange('want')} className={`bookmark ${status === 'want' ? 'filled' : ''}`}></button>
                    <button role='button' onClick={() => onStatusChange('read')} className={`check ${status === 'read' ? 'filled' : ''}`}></button>
                    <button role='button' onClick={() => onStatusChange('reading')} className={`chip ${status === 'reading' ? 'filled' : ''}`}>Reading</button>
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