let myLibrary = [];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  let title = window.prompt("Title");
  let author = window.prompt("Author");
  let pages = window.prompt("Pages");
  let status = window.prompt("Status");
  let newBook = new Book(title, author, pages, status);
  myLibrary.push(newBook);
}