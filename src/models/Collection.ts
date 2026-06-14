import type { Book } from "./Book"
import type { ReadingStatus } from "./ReadingStatus"

export interface Collection {
    book: Book
    status: ReadingStatus
}