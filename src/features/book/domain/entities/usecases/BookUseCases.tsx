import { Book } from "../Book";
import { BookRepository } from "../repository/BookRepository";

export interface BookService {
  getSampleBooks(): Promise<Book[]>;
  getSampleBook(): Book;
}

export class BookServiceImpl implements BookService {
  bookRepo: BookRepository;

  constructor(bookRepo: BookRepository) {
    this.bookRepo = bookRepo;
  }

  async getSampleBooks(): Promise<Book[]> {
    return this.bookRepo.getBooks();
  }

  getSampleBook(): Book {
    return this.bookRepo.getBook();
  }
}