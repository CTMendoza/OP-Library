// users books objects to be stored in myLibrary array
const myLibrary = [];

//users book objects are created through Books constructor
function Book (author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

//a function that takes users input and stores them as new book objects into the myLibrary array
