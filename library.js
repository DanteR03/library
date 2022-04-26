let myLibrary = [];

const newBookButton = document.querySelector(".newbook");

newBookButton.addEventListener("click", function(){
  const popup = document.querySelector(".form-popup");
  popup.style.display = "block";
});

const submitButton = document.querySelector(".btn");

submitButton.addEventListener("click", addBookToLibrary);

const closeButton = document.querySelector(".btn-cancel");

closeButton.addEventListener("click", function(){
  const popup = document.querySelector(".form-popup");
  const titleField = document.querySelector("input[name=title]");
  const authorField = document.querySelector("input[name=author]");
  const pagesField = document.querySelector("input[name=pages]");
  const statusCheck = document.querySelector("input[name=status]");
  titleField.value = "";
  authorField.value = "";
  pagesField.value = "";
  statusCheck.checked = false;
  popup.style.display = "none";
});

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const popup = document.querySelector(".form-popup");
  const titleField = document.querySelector("input[name=title]");
  const authorField = document.querySelector("input[name=author]");
  const pagesField = document.querySelector("input[name=pages]");
  const statusCheck = document.querySelector("input[name=status]");
  if (titleField.validity.valid === false) {
    titleField.reportValidity();
  } else if (authorField.validity.valid === false) {
    authorField.reportValidity();
  } else if (pagesField.validity.valid === false) {
    pagesField.reportValidity();
  } else {
    let title = titleField.value;
    let author = authorField.value;
    let pages = pagesField.value;
    let status = "";
    if (statusCheck.checked === false) {
      status = "Not Read";
    } else {
      status = "Read";
    };
    let newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayBooks(myLibrary);
    titleField.value = "";
    authorField.value = "";
    pagesField.value = "";
    statusCheck.checked = false;
    popup.style.display = "none";
  };
};

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
