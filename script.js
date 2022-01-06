// add every array item book as a card on the site
function Book(title, author, numPages, arrayIndex){
    this.title = title;
    this.author = author;
    this.numPages = numPages;
    this.arrayIndex = arrayIndex;
}


let myLibrary = [];

function openTheForm(){
    document.getElementById('abc').style.display = "block";
}

function closeTheForm(){
    document.getElementById('abc').style.display = "none";
}


function createBook(book){
    myLibrary.push(book);
    addCardPopulate();
}


function populateCards(){
    var cardDisplay = document.createElement('div');
    cardDisplay.classList.add("cardDisplay");

    document.body.appendChild(cardDisplay);

    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];

        let title = book.title;
        let author = book.author;
        let numPages = book.numPages;
        myLibrary[i].arrayIndex = i; //updates index variable of each book object for deletion purposes

        var cardDisplay = document.querySelector(".cardDisplay");
        
        let bookHTMLObject = document.createElement("div");
        bookHTMLObject.classList.add("bookCard");
        
        let deleteButton = document.createElement("div");
        deleteButton.innerText = "x";
        deleteButton.classList.add("deleteButton");
        deleteButton.addEventListener("click", deleteBook);

        let titleHTML = document.createElement("p");
        let authorHTML = document.createElement("p");
        let numPagesHTML = document.createElement("p");

        titleHTML.textContent = title;
        authorHTML.textContent = author;
        numPagesHTML.textContent = numPages;

        bookHTMLObject.appendChild(deleteButton);
        bookHTMLObject.appendChild(titleHTML);
        bookHTMLObject.appendChild(authorHTML);
        bookHTMLObject.appendChild(numPagesHTML);

        cardDisplay.appendChild(bookHTMLObject);
    }
}

function deleteBook(index){
    let cardDisplay = document.querySelector(".cardDisplay");
    let nodeList = cardDisplay.childNodes;
    nodeList[index].remove();
}

function reIndexBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        myLibrary[i].arrayIndex = i;
    }
}

function addCardPopulate(){

    let book = myLibrary[myLibrary.length-1];

    let title = book.title;
    let author = book.author;
    let numPages = book.numPages;

    var cardDisplay = document.querySelector(".cardDisplay");
    
    let bookHTMLObject = document.createElement("div");
    bookHTMLObject.classList.add("bookCard");
    
    let deleteButton = document.createElement("div");
    deleteButton.innerText = "x";
    deleteButton.classList.add("deleteButton");
    deleteButton.addEventListener("click", () => {
        deleteBook(book.arrayIndex);
        myLibrary.splice(book.arrayIndex, 1);
        reIndexBooks();
    })

    let titleHTML = document.createElement("p");
    let authorHTML = document.createElement("p");
    let numPagesHTML = document.createElement("p");

    titleHTML.textContent = title;
    authorHTML.textContent = author;
    numPagesHTML.textContent = numPages;

    bookHTMLObject.appendChild(deleteButton);
    bookHTMLObject.appendChild(titleHTML);
    bookHTMLObject.appendChild(authorHTML);
    bookHTMLObject.appendChild(numPagesHTML);

    cardDisplay.appendChild(bookHTMLObject);
}



function addEventListeners(){
    let addButton = document.createElement("button");
    addButton.innerText = "Add Book";
    document.body.appendChild(addButton);
    addButton.addEventListener("click", () => {
        openTheForm();
    });

    document.getElementById('closeButton').addEventListener("click", () => {
        closeTheForm();
    })

    document.getElementById('submit').addEventListener('click', () => {
        var elements = document.getElementById("form").elements;
        var obj = {};
        for(var i = 0 ; i < elements.length ; i++){
            var item = elements.item(i);
            obj[item.name] = item.value;
        }
        let newBook = new Book(obj.title, obj.author, obj.numPages, myLibrary.length);
        createBook(newBook);
        closeTheForm();
    })


}



function loadPage(){
    populateCards();
    addEventListeners();
}




loadPage();