import ShelfCard from 'components/ShelfCard/ShelfCard'
import { useShelf } from '../../context/ShelfContext'
import './Shelf.css'

function Shelf() {
    const { shelf, setStatus } = useShelf()

    return (
        <>
            <h1>My shelf</h1>
            <section className='shelf'>
            { shelf.map(c => <ShelfCard key={c.book.id} shelf={c} onStatusChange={(status) => setStatus(status, c.book.id)} /> ) }
            </section>
        </>
    )
}

export default Shelf