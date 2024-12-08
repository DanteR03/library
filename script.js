const myLibrary = [];
const newBookBtn = document.querySelector(".header-container > button");
const newBookModal = document.querySelector(".book-form-modal");
const modalCloseButton = document.querySelector(".form-close-button");
const modalSubmitButton = document.querySelector(".form-submit-button");

newBookBtn.addEventListener("click", () => {
    newBookModal.showModal();
});

modalCloseButton.addEventListener("click", (e) => {
    e.preventDefault();
    newBookModal.close();
});

modalSubmitButton.addEventListener("click", (e) => {
    e.preventDefault();
    const bookForm = document.querySelector(".book-form-modal > form");
    const formTitleInput = document.querySelector("input#title");
    const formAuthorInput = document.querySelector("input#author");
    const formPagesInput = document.querySelector("input#pages");
    const formStatusInput = document.querySelector("input#status");
    if (bookForm.checkValidity() === false) {
        bookForm.reportValidity();
    } else if (formStatusInput.checked === true) {
        addBookToLibrary(formTitleInput.value, formAuthorInput.value, formPagesInput.value, "Read");
        displayLibraryBooks();
        newBookModal.close();
    } else {
        addBookToLibrary(formTitleInput.value, formAuthorInput.value, formPagesInput.value, "Not Read");
        displayLibraryBooks();
        newBookModal.close();
    }
})

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
    this.changeStatus = function() {
        if (this.status === "Not Read") {
            this.status = "Read";
        } else {
            this.status = "Not Read";
        };
    };
}

function addBookToLibrary(title, author, pages, status) {
    let book = new Book(title, author, pages, status);
    myLibrary.push(book);
}

function deleteBookFromLibrary(index) {
    myLibrary.splice(index, 1);
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
        const bookIndex = myLibrary.indexOf(book);
        titlePara.textContent = book.title;
        authorPara.textContent = book.author;
        pagesPara.textContent = book.pages;
        statusPara.textContent = book.status;
        deleteButton.textContent = "Delete";
        changeButton.textContent = "Change Status";
        deleteButton.addEventListener("click", (e) => {
            deleteBookFromLibrary(e.target.parentNode.parentNode.dataset.index);
            displayLibraryBooks();
        })
        buttonContainer.append(deleteButton, changeButton);
        buttonContainer.classList.add("book-buttons");
        bookElement.append(titlePara, authorPara, pagesPara, statusPara, buttonContainer);
        bookElement.classList.add("book");
        bookElement.setAttribute("data-index", bookIndex);
        booksContainer.appendChild(bookElement);
    })
}