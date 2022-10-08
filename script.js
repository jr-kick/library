let btn = document.getElementById('button');
let books = document.getElementById('books');
let array = [];


btn.addEventListener('click', addBookToLibrary)

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    return this;
};

function addBookToLibrary() {
    let title = document.getElementById('title').value
    let author = document.getElementById('author').value
    let pages = document.getElementById('pages').value
    let read = document.getElementById('read').value
    if (!title || !author || !pages) {
        alert('I\'m empty!!!');
        return;
    };
    let obj = new Book(title, author, pages, read);
    let i = 0;
    while (i < array.length) {
        i++
    };
    array[i] = obj;
    refreshPage();
};

function refreshPage() {
    books.innerHTML = '';
    let i = 0;
    let j = 0;
    while (i < array.length) {
        let obj = array[i];
        let newBook = document.createElement('li');
        let ul = document.createElement('ul');
        books.appendChild(newBook);
        newBook.setAttribute('value', i);
        newBook.appendChild(ul);
        for (prop in obj) {
            let li = document.createElement('li')
            ul.appendChild(li);
            li.textContent = obj[prop];
        };
        i++;
    };
};