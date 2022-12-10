/* eslint-disable no-unused-vars */
/* eslint-disable max-classes-per-file */

class Book {
  constructor(title, author) {
    this.name = title;
    this.author = author;
  }
}

const nameInput = document.getElementById('nameInput');
const authorInput = document.getElementById('authorInput');
const addBtn = document.querySelector('.add-btn');
const storageKey = 'booksLocalData';
const loadedBooks = JSON.parse(localStorage.getItem(storageKey)) || null;
const bookslist = document.querySelector('.books-list');

// -----Nav Items
const list = document.querySelector('.list-nav');
const add = document.querySelector('.add-nav');
const contact = document.querySelector('.contact-nav');
const allBooks = document.querySelector('.all-awesome-books');
const addBooks = document.querySelector('.add-awesome-books');
const contactBooks = document.querySelector('.contact-awesome-books');

const date = new Date();
const time = date.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
document.querySelector('.date').innerHTML = `${date.toDateString()}, ${time}`;

class UI {
  static loadBook() {
    bookslist.innerHTML = '';
    if (loadedBooks !== null) {
      for (let i = 0; i < loadedBooks.length; i += 1) {
        bookslist.innerHTML += `<tr class="book-info">
              <td>
              "${loadedBooks[i].name}" by ${loadedBooks[i].author} <button class="remove-btn btn btn-outline-primary" id="btn-${i}" onclick="UI.deleteBook(${i})" value="remove">Remove</button>
              </td>
              </tr>`;
      }
    } else {
      const sampleFav = [
        {
          name: 'Harry Potter',
          author: 'J. K. Rowling',
        },
        {
          name: 'The Great Gatsby',
          author: 'F. Scott Fitzgerald',
        },
      ];
      localStorage.setItem(storageKey, JSON.stringify(sampleFav));
      UI.loadBook();
    }
  }

  static addBook() {
    const book = new Book(nameInput.value, authorInput.value);
    loadedBooks.push(book);
    localStorage.setItem(storageKey, JSON.stringify(loadedBooks));
    UI.loadBook();
    nameInput.value = '';
    authorInput.value = '';
  }

  static deleteBook(i) {
    loadedBooks.splice(i, 1);
    localStorage.setItem(storageKey, JSON.stringify(loadedBooks));
    UI.loadBook();
  }
}
window.onload = () => {
  document.querySelector('.date').innerHTML = date;
  UI.loadBook();
  allBooks.classList.add('show');
  addBooks.classList.add('hide');
  contactBooks.classList.add('hide');
};

addBtn.addEventListener('click', UI.addBook);

// ---------Navigation...........//

list.addEventListener('click', () => {
  allBooks.classList.replace('hide', 'show');
  addBooks.classList.replace('show', 'hide');
  contactBooks.classList.replace('show', 'hide');
});

add.addEventListener('click', () => {
  addBooks.classList.replace('hide', 'show');
  allBooks.classList.replace('show', 'hide');
  contactBooks.classList.replace('show', 'hide');
});

contact.addEventListener('click', () => {
  contactBooks.classList.replace('hide', 'show');
  allBooks.classList.replace('show', 'hide');
  addBooks.classList.replace('show', 'hide');
});
