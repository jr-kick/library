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
    while (i < array.length) {
        let obj = array[i];
        let newBook = document.createElement('li');
        let ul = document.createElement('ul');
        books.appendChild(newBook);
        newBook.setAttribute('value', i);
        newBook.appendChild(ul);
        for (prop in obj) {
            let li = document.createElement('li');
            ul.appendChild(li);
            if (prop != 'read') {
                li.textContent = obj[prop];
            } else {
                let options = document.getElementById('read').cloneNode(1);
                options.removeAttribute('id');
                ul.appendChild(options);
                if (obj[prop] === 'read') {
                    options.firstElementChild.setAttribute('selected', 'selected');
                } else options.lastElementChild.setAttribute('selected', 'selected');
                options.addEventListener('input', changeOption);
            };
        };
        ul.firstElementChild.style.alignSelf = 'center';
        ul.firstElementChild.style.fontSize = '30px';
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Delete this book';
        ul.appendChild(removeBtn);
        removeBtn.addEventListener('click', removeBook);
        i++;
    };
};

function changeOption(e) {
    let options = e.target;
    let currentParent = options.parentNode.parentNode;
    let obj = array[currentParent.value];
    obj.read = options.value;
};

function removeBook(e) {
    if (prompt('Are you sure?').toLowerCase() === 'no') return;
    let removeBtn = e.target;
    let currentParent = removeBtn.parentNode.parentNode;
    array.splice(currentParent.value, 1);
    refreshPage();
};