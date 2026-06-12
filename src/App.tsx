import type { Book } from 'models/Book'
import BookCatalog from 'pages/BookCatalog/BookCatalog'
import Shelf from 'pages/Shelf/Shelf'
import { useState } from 'react'
import './App.css'

function App() {
  const  [collection, setCollection ]= useState<Book[]>([])

  function updateBookCollection(book: Book) {
    console.log('Button clicked from child', book)
    if (!collection.find(b => b.id === book.id)) {
      setCollection([...collection, book])
    } else {
      const filteredList = collection.filter(b => b.id !== book.id)
      setCollection(filteredList)
    }
    console.log(collection)
  }

  return (
    <>
      <BookCatalog collection={collection} buttonClicked={updateBookCollection} />
      <Shelf collection={collection} />
    </>
  )
}

export default App
