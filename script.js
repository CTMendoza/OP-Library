// users books objects to be stored in myLibrary array
const myLibrary = [];

//users book objects are created through Books constructor
function Book (author, title, pages) {
    this.author = author;
    this.title = title;
    this.pages = pages;
}

// select the DOM inputs and submit button within the form 
const title = document.querySelector('input[name="title"]');
const author = document.querySelector('input[name="author"]');
const pages = document.querySelector('input[name="pages_total"]');
const read = document.getElementsByName('readOrNot');
const submit = document.querySelector('#submit-button');
//a function that takes users input and stores them as new book objects into the myLibrary array
