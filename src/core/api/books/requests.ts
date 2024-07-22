import { BooksCategoriesResponse } from './responses';

import booksCategoriesResponseMock from './books_categories_response_mock.json';

export const getBooksCategories = () => {
  return new Promise<BooksCategoriesResponse>((resolve) => {
    setTimeout(() => {
      resolve(booksCategoriesResponseMock);
    }, 2000);
  });
};
