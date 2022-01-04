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

function closeTheForm(){
    document.getElementById('abc').style.display = "none";
}


function createBook(book){
    myLibrary.push(book);
    addCardPopulate();
    return myLibrary[length-1];
}


function populateCards(){
    var cardDisplay = document.createElement('div');
    cardDisplay.classList.add("cardDisplay");

    document.body.appendChild(cardDisplay);

    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookHTMLObject = document.createElement('div');
        bookHTMLObject.classList.add("bookCard")
        cardDisplay.appendChild(bookHTMLObject);
    }
}

function addCardPopulate(){
    var cardDisplay = document.querySelector(".cardDisplay");
    
    let bookHTMLObject = document.createElement("div");
    bookHTMLObject.classList.add("bookCard");
    
    cardDisplay.appendChild(bookHTMLObject);
}



function addEventListeners(){
    let addButton = document.createElement("button");
    addButton.innerText = "Add Book";
    document.body.appendChild(addButton);
    addButton.addEventListener("click", () => {
        openTheForm();
    });

}



function loadPage(){
    populateCards();
    addEventListeners();
}




loadPage();