const books = [
  {
    id: '1',
    name: 'Harry Potter',
    author: 'Yordi',
  },
  {
    id: '1',
    name: 'Harry Potter',
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
console.log(books);

addBtn.addEventListener('click', addBook);
