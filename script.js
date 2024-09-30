// users books objects to be stored in myLibrary array
const myLibrary = [];

//users book objects are created through Books constructor
function Book (author, title, pages, readStatus) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.readStatus = readStatus
}

// select the DOM inputs and submit button within the form 
const form = document.querySelector('#book-form');
const title = document.querySelector('input[name="title"]');
const author = document.querySelector('input[name="author"]');
const pages = document.querySelector('input[name="page_total"]');
const read = document.getElementsByName('readOrNot');
const submit = document.querySelector('#submit-button');

//a function that takes users input and stores them as new book objects into the myLibrary array
form.addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Determine the value of the selected radio button
    let readStatus;
    for (const input of read) {
        if (input.checked) {
            readStatus = input.value;
            break;
        }
    }
    //store input values in new Book object
    const newBook = new Book(title.value, author.value, pages.value, readStatus);

    //store neBook object in myLibrary array
    myLibrary.push(newBook);

    // display myLibrary array in console
    console.log(myLibrary);

    //clear form inputs
    form.reset(); 
})




