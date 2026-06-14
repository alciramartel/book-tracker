import type { Book } from "./Book"
import type { ReadingStatus } from "./ReadingStatus"

export interface ShelfItem {
    book: Book
    status: ReadingStatus
}