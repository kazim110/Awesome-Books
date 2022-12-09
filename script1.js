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

const date = document.querySelector('.date');
console.log(date)

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
};

addBtn.addEventListener('click', UI.addBook);

// ---------Navigation...........//


