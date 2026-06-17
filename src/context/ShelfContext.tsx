import type { Book } from 'models/Book';
import type { ReadingStatus } from 'models/ReadingStatus';
import type { ShelfItem } from 'models/ShelfItem';
import { createContext, useContext, useState, type ReactNode } from 'react';

interface ShelfContextType {
    shelf: ShelfItem[]
    updateBookshelf: (book: Book) => void
    setStatus: (status: ReadingStatus, id: string) => void
}


const ShelfContext = createContext<ShelfContextType | undefined>(undefined)


export function ShelfProvider({ children }: { children: ReactNode }) {
    const [shelf, setShelf] = useState<ShelfItem[]>([])

    function updateBookshelf(book: Book) {
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

    const contextValue = {
        shelf,
        updateBookshelf,
        setStatus
    }

    return (
        <ShelfContext value={contextValue}>
            {children}
        </ShelfContext>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useShelf() {
  const context = useContext(ShelfContext)
  if (context === undefined) {
    throw new Error("useShelf must be used within a ShelfProvider")
  }
  return context
}