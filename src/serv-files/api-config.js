export const fetchBooks = {
  path: '/api/books',
  method: 'GET'
};

export const fetchBook = {
  path: '/api/books/:id',
  method: 'GET'
};

export const searchBook = {
  path: '/api/books/',
  method: 'GET'
};

export const updateBook = {
  path: '/api/books/:id',
  method: 'PATCH'
};

export const addBook = {
  path: '/api/books/',
  method: 'POST'
};
