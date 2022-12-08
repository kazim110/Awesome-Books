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

class UI {
  static loadBook() {
    bookslist.innerHTML = '';
    if (loadedBooks !== null) {
      for (let i = 0; i < loadedBooks.length; i += 1) {
        bookslist.innerHTML += `<div class="book-info">
              <p>${loadedBooks[i].name}</p>
              <p>${loadedBooks[i].author}</p>
              <button class="remove-btn" id="btn-${i}" onclick="UI.deleteBook(${i})" value="remove">Remove</button>
              <hr>
              </div>`;
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
  UI.loadBook();
};

addBtn.addEventListener('click', UI.addBook);
