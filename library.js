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
  displayBooks(myLibrary);
}

function displayBooks(array) {
  for (let book of array) {
    if (book.displayed === false || book.displayed === undefined) {
    const table = document.querySelector("table");
    const row = document.createElement("tr");
    const titleCell = document.createElement("td");
    titleCell.textContent = book.title;
    const authorCell = document.createElement("td");
    authorCell.textContent = book.author;
    const pagesCell = document.createElement("td");
    pagesCell.textContent = book.pages;
    const statusCell = document.createElement("td");
    statusCell.textContent = book.status;
    const buttons = document.createElement("td");
    buttons.classList.add("buttons");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.textContent = "Delete";
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    buttons.append(deleteButton, editButton);
    row.append(titleCell, authorCell, pagesCell, statusCell, buttons);
    table.appendChild(row);
    book.displayed = true;
    };
  };
}

const button = document.querySelector(".newbook");

button.addEventListener("click", addBookToLibrary);