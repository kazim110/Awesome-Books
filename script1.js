const nameInput = document.getElementById('nameInput');
const authorInput = document.getElementById('authorInput');
const addBtn = document.querySelector('.add-btn');
const storageKey = 'booksLocalData';
const loadedBooks = JSON.parse(localStorage.getItem(storageKey));
const bookslist = document.querySelector('.books-list');

function loadBook() {
  bookslist.innerHTML = '';
  if (loadedBooks != null) {
    for (let i = 0; i < loadedBooks.length; i += 1) {
      bookslist.innerHTML += `<div class="book-info">
              <p>${loadedBooks[i].name}</p>
              <p>${loadedBooks[i].author}</p>
              <button class="remove-btn" id="btn-${i}" onclick="deleteBook(${i})" value="remove">Remove</button>
              <hr>
              </div>`;
    }
  }
}

window.onload = () => {
  loadBook();
};

function addBook() {
  const book = { name: nameInput.value, author: authorInput.value };
  loadedBooks.push(book);
  localStorage.setItem(storageKey, JSON.stringify(loadedBooks));
  loadBook();
}

addBtn.addEventListener('click', addBook);

function deleteBook(i) {
  loadedBooks.splice(i, 1);
  localStorage.setItem(storageKey, JSON.stringify(loadedBooks));
  loadBook();
}
