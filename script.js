const books = [
  {
    id: '1',
    name: 'Harry Potter',
    author: 'Yordi',
  },
  {
    id: '2',
    name: 'Life of hapiness',
    author: 'Yordi',
  },
];
const nameInput = document.getElementById('nameInput');
const authorInput = document.getElementById('authorInput');
const addBtn = document.querySelector('add-btn');

function addBook() {
  const book = { name: nameInput.value, author: authorInput.value };
  books.push(book);
}
console.log(books[0],books[1]);

addBtn.addEventListener('click', addBook);
