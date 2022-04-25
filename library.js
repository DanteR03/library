let myLibrary = [];

const button = document.querySelector(".newbook");

button.addEventListener("click", addBookToLibrary);

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
  const cards = document.querySelectorAll(".book");
  cards.forEach(card => card.parentElement.removeChild(card));
  for (let book of array) {
    const container = document.querySelector(".main-container");
    const card = document.createElement("div");
    card.classList.add("book");
    card.setAttribute("data-number", myLibrary.indexOf(book));
    const titlePara = document.createElement("p");
    titlePara.textContent = book.title;
    const authorPara = document.createElement("p");
    authorPara.textContent = book.author;
    const pagesPara = document.createElement("p");
    pagesPara.textContent = book.pages;
    const statusPara = document.createElement("p");
    statusPara.textContent = book.status;
    const buttons = document.createElement("p");
    buttons.classList.add("buttons");
    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete");
    deleteButton.setAttribute("data-number", myLibrary.indexOf(book));
    deleteButton.addEventListener("click", e => {deleteBook(e.target.dataset.number)});
    deleteButton.textContent = "Delete";
    const editButton = document.createElement("button");
    editButton.classList.add("edit");
    editButton.textContent = "Edit";
    buttons.append(deleteButton, editButton);
    card.append(titlePara, authorPara, pagesPara, statusPara, buttons);
    container.appendChild(card);
  };
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  const book = document.querySelector(`[data-number="${index}"]`);
  book.parentElement.removeChild(book);
  displayBooks(myLibrary);
}
