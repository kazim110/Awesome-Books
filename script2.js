/* eslint-disable no-unused-vars */
const sample = [
  {
    title: 'Harry Potter',
    author: 'J. K. Rowling',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
  },
]
const books = localStorage.getItem('books-array')==null?sample: JSON.parse(localStorage.getItem('books-array')) ;

const addBtn = document.querySelector('.add-btn');
const titleInput = document.querySelector('#nameInput');
const authorInput = document.querySelector('#authorInput');
const booksList = document.querySelector('.books-list');

let index = 0;

function remove(i) {
  var bookTags = booksList.querySelectorAll('.book-tag');
  booksList.removeChild(bookTags[i]);
  bookTags = booksList.querySelectorAll('.book-tag');
  console.log(bookTags,i)
  for(i; i<bookTags.length; i+=1){
    bookTags[i].querySelector('button').setAttribute('onclick',`remove(${i})`);
  }
  books.splice(i, 1);
  localStorage.setItem('books-array', JSON.stringify(books));
}

function display() {
  for (index; index < books.length; index += 1) {
    const displayTag = document.createElement('div');
    displayTag.setAttribute('class', 'book-tag');

    const bookTitle = document.createElement('h3');
    bookTitle.innerText = books[index].title;

    const bookAuthor = document.createElement('p');
    bookAuthor.innerText = books[index].author;

    const removeBtn = document.createElement('button');

    removeBtn.setAttribute('onclick', `remove(${index})`);
    removeBtn.innerText = 'remove';

    const horizontal = document.createElement('hr');
    horizontal.style.color = 'grey';

    displayTag.append(bookTitle, bookAuthor, removeBtn, horizontal);
    booksList.appendChild(displayTag);
  }
}

function addBook() {
  const book = { title: titleInput.value, author: authorInput.value };
  books.push(book);
  titleInput.value = '';
  authorInput.value = '';
  localStorage.setItem('books-array', JSON.stringify(books));
  display();
}

addBtn.addEventListener('click', addBook);
display();

