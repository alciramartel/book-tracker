import type { Book } from 'models/Book'
import BookCatalog from 'pages/BookCatalog/BookCatalog'
import Shelf from 'pages/Shelf/Shelf'
import { useState } from 'react'
import './App.css'
import type { ReadingStatus } from './models/ReadingStatus'
import type { ShelfItem } from './models/ShelfItem'

function App() {
  const  [shelf, setShelf ]= useState<ShelfItem[]>([])

  function updateBookShelf(book: Book) {
    if (!shelf.find(b => b.book.id === book.id)) {
      const newBook = {
        book,
        status: "want" as ReadingStatus
      }
      setShelf([...shelf, newBook])
    } else {
      const filteredList = shelf.filter(b => b.book.id !== book.id)
      setShelf(filteredList)
    }
  }

  function setStatus(status: ReadingStatus, bookId: string) {
    const updatedShelf = shelf.map(b => b.book.id === bookId ? { ...b, status } : b)
    setShelf(updatedShelf)
  }

  return (
    <>
      <BookCatalog shelf={shelf} onAddBook={updateBookShelf} />
      <Shelf shelf={shelf} onStatusChange={setStatus} />
    </>
  )
}

export default App
