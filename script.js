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

const content = document.querySelector('.content')


//a function to create a card in the DOM
function createCard (author, title, pages, readStatus) {
    /*
        <div class="card">
            <div>Title:</div>
            <div>Author:</div>
            <div>Pages:</div>
            <div>Read Status:</div>
            <div class="edit-buttons">
                <button>Change Read Status</button>
                <button> Delete Book</button>
            </div>
       </div>
    */
   const card = document.createElement('div');
   card.classList.add('card');

   const titleElement = document.createElement('div');
   titleElement.textContent = `Title: ${title}`;
   card.appendChild(titleElement);

   const authorElement = document.createElement('div');
   authorElement.textContent = `Author: ${author}`;
   card.appendChild(authorElement);

   const pagesElement = document.createElement('div');
   pagesElement.textContent = `Pages: ${pages}`;
   card.appendChild(pagesElement);

   const readStatElement = document.createElement('div');
   readStatElement.textContent = `Read Status: ${readStatus}`;
   card.appendChild(readStatElement);

   const edit = document.createElement('div');
   edit.classList.add('edit-buttons');
   card.appendChild(edit);

   const changeButton = document.createElement('button');
   changeButton.textContent = 'Change Read Status'
   const deleteButton = document.createElement('button');
   deleteButton.textContent = 'Delete Book'
   edit.appendChild(changeButton);
   edit.appendChild(deleteButton);
   
   content.appendChild(card);
}


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
    const newBook = new Book(author.value, title.value, pages.value, readStatus);

    //store neBook object in myLibrary array
    myLibrary.push(newBook);

    // call createCard function to show card on web app when submit button is pressed
    createCard(author.value, title.value, pages.value, readStatus);

    // display myLibrary array in console
    console.log(myLibrary);

    //clear form inputs
    form.reset(); 
})




