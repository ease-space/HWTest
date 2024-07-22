export interface Book {
  id: string;
  cover: string;
  name: string;
  description: string;
  chapters: string[];
}

export interface BooksCategory {
  id: string;
  name: string;
  books: Book[];
}

export interface BooksCategoriesResponse {
  data: BooksCategory[];
}
