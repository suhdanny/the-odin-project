const openModalButton = document.querySelector('.btn-add');
const closeModalButton = document.querySelector('.close-button');
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

openModalButton.addEventListener('click', () => {
    openModal(modal);
})

closeModalButton.addEventListener('click', () => {
    closeModal(modal);
})

function openModal(modal) {
    modal.classList.add('active');
    overlay.classList.add('active');
}

function closeModal(modal) {
    modal.classList.remove('active');
    overlay.classList.remove('active');
}