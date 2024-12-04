const myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.changeStatus = function(status) {
        this.status = status;
    };
}

function addBookToLibrary(title, author, pages, status) {
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

function displayLibraryBooks() {
    const booksContainer = document.querySelector(".books-container");
    booksContainer.innerHTML = "";
    myLibrary.forEach((book) => {
        const bookElement = document.createElement("div");
        const titlePara = document.createElement("p");
        const authorPara = document.createElement("p");
        const pagesPara = document.createElement("p");
        const statusPara = document.createElement("p");
        const buttonContainer = document.createElement("div");
        const deleteButton = document.createElement("button");
        const changeButton = document.createElement("button");
        titlePara.textContent = book.title;
        authorPara.textContent = book.author;
        pagesPara.textContent = book.pages;
        statusPara.textContent = book.status;
        deleteButton.textContent = "Delete";
        changeButton.textContent = "Change Status";
        buttonContainer.append(deleteButton, changeButton);
        buttonContainer.classList.add("book-buttons");
        bookElement.append(titlePara, authorPara, pagesPara, statusPara, buttonContainer);
        bookElement.classList.add("book");
        booksContainer.appendChild(bookElement);
    })
}