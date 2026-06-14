import type { Book } from 'models/Book'
import BookCatalog from 'pages/BookCatalog/BookCatalog'
import Shelf from 'pages/Shelf/Shelf'
import { useState } from 'react'
import './App.css'
import type { Collection } from './models/Collection'
import type { ReadingStatus } from './models/ReadingStatus'

function App() {
  const  [collection, setCollection ]= useState<Collection[]>([])

  function updateBookCollection(book: Book) {
    if (!collection.find(b => b.book.id === book.id)) {
      const newBook = {
        book,
        status: "want" as ReadingStatus
      }
      setCollection([...collection, newBook])
    } else {
      const filteredList = collection.filter(b => b.book.id !== book.id)
      setCollection(filteredList)
    }
  }

  function setStatus(status: ReadingStatus, bookId: string) {
    const updatedCollection = collection.map(b => b.book.id === bookId ? { book: b.book, status } : { ...b })
    setCollection(updatedCollection)
  }

  return (
    <>
      <BookCatalog collection={collection} buttonClicked={updateBookCollection} />
      <Shelf collection={collection} statusChanged={setStatus} />
    </>
  )
}

export default App
