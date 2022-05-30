const password = document.getElementById('password');
const passwordConfirm = document.getElementById('confirm');
const form = document.getElementById('form');
const errorMessage = document.getElementById('error')

form.addEventListener('submit', (e) => {
    if (password.value !== passwordConfirm.value) {
        e.preventDefault();
        errorMessage.classList.add('active');
    }
})