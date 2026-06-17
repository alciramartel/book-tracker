import Nav from 'layout/Nav/Nav'
import BookCatalog from 'pages/BookCatalog/BookCatalog'
import Shelf from 'pages/Shelf/Shelf'
import { Route, Routes } from "react-router"
import './App.css'
import { ShelfProvider } from './context/ShelfContext'


function App() {

  return (
    <ShelfProvider>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<BookCatalog />} ></Route>
        <Route path="shelf" element={<Shelf />} ></Route>
      </Routes>
    </ShelfProvider>
  )
}

export default App
