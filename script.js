// add every array item book as a card on the site
let myLibrary = [1,2,3];


function createBook(){
    myLibrary.push(2);
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

function addCardPopulate(book){
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
        createBook();
        addCardPopulate();
    });
}



function loadPage(){
    populateCards();
    addEventListeners();
}




loadPage();