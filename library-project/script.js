const openModalButton = document.querySelector('[data-modal-target]');
const closeModalButton = document.querySelector('[data-close-button]');
const modalForm = document.querySelector('form');
const overlay = document.getElementById('overlay');
// const readButtons = document.querySelectorAll('.book-card .read-btn');
// const removeButtons = document.querySelectorAll('.book-card .remove-btn');
const bookContainer = document.querySelector('.book-container');

// Implement Modal Functionality
openModalButton.addEventListener('click', () => {
    const modal = document.querySelector(openModalButton.dataset.modalTarget);
    openModal(modal);
})

overlay.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    closeModal(modal);
})

function Book(title, author, page, isRead) {
    this.title = title;
    this.author = author;
    this.page = page;
    this.isRead = isRead;
}

modalForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const page = document.getElementById('page').value;
    const cb = document.getElementById('read');
    let isRead;
    (cb.checked) ? isRead = true : isRead = false;

    const newBook = new Book(title, author, page, isRead);

    addBookToLibrary(newBook);
    modalForm.reset();
    const modal = closeModalButton.closest('.modal');
    closeModal(modal);
})

function addBookToLibrary(newBook) {
    const bookCard = document.createElement('div')
    const titleElement = document.createElement('div');
    const authorElement = document.createElement('div');
    const pageElement = document.createElement('div');
    const isReadButton = document.createElement('button');
    const removeButton = document.createElement('button');

    bookCard.classList.add('book-card')
    titleElement.classList.add('title');
    titleElement.innerText = newBook.title;
    authorElement.classList.add('author');
    authorElement.innerText = newBook.author;
    pageElement.classList.add('page');
    pageElement.innerText = newBook.page;
    removeButton.classList.add('btn', 'remove-btn', 'remove');
    removeButton.innerText = 'Remove';

    if (newBook.isRead) {
        isReadButton.classList.add('btn', 'read-btn', 'read');
        isReadButton.innerText = 'Read';
    } else {
        isReadButton.classList.add('btn', 'read-btn', 'not-read');
        isReadButton.innerText = "Not Read"
    }

    addEventRead(isReadButton);
    addEventRemove(removeButton);

    bookCard.append(titleElement, authorElement, pageElement, isReadButton, removeButton);
    bookContainer.append(bookCard);
}

function openModal(modal) {
    if (modal == null) return;
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    if (modal == null) return;
    modal.classList.remove('active');
    overlay.classList.remove('active');
}

// Implement Read and Remove Events

function addEventRead(button) {
    button.addEventListener('click', () => {
        changeReadStatus(button);
    })
}

function addEventRemove(button) {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    })
}

function changeReadStatus(button) {
    if (button.classList.contains('read')) {
        button.classList.remove('read');
        button.classList.add('not-read');
        button.innerText = 'Not Read';
    } else if (button.classList.contains('not-read')) {
        button.classList.remove('not-read');
        button.classList.add('read');
        button.innerText = "Read";
    }
}