const form = document.querySelector('form');
const email = document.getElementById('mail');
const emailError = email.nextElementSibling;
const country = document.getElementById('country');
const countryError = country.nextElementSibling;
const postalCode = document.getElementById('postal');
const postalError = postalCode.nextElementSibling;
const password = document.getElementById('pwd');
const passwordError = password.nextElementSibling;
const passwordConfirm = document.getElementById('pwdconfirm');
const passwordConfirmError = passwordConfirm.nextElementSibling;

email.addEventListener('input', (e) => {
    if (email.validity.valid) {
        emailError.textContent = '';
        emailError.classList.remove('active');
    } else {
        showEmailError();
    }
})

function showEmailError() {
    if (email.validity.valueMissing) {
        emailError.textContent = 'Please enter an email address.';
    } else if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid email address.'
    }

    emailError.classList.add('active');
}

postalCode.addEventListener('input', () => {
    if (testCanadianPostalCode(postalCode.value)) {
        postalError.textContent = '';
        postalError.classList.remove('active');
    } else {
        postalError.textContent = 'Please enter a valid postal code.';
        postalError.classList.add('active');
    }
})

function testCanadianPostalCode(postalCode) {
    const postalCodeRegex = new RegExp(/^[ABCEGHJKLMNPRSTVXY]\d[ABCEGHJKLMNPRSTVXY][ -]?\d[ABCEGHJKLMNPRSTVXY]\d$/i);
    return postalCodeRegex.test(postalCode);
}

password.addEventListener('input', () => {
    if (checkPassword(password.value)) {
        passwordError.textContent = '';
        passwordError.classList.remove('active');
    } else {
        passwordError.textContent = 'Your password should contain a minimum of 8 letters, containing at least one uppercase, at least one lowercase, and one symbol.'
        passwordError.classList.add('active');
    }
})

function checkPassword(password) {
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return passwordRegex.test(password);
}

passwordConfirm.addEventListener('input', () => {
    if (testPasswordMatch()) {
        passwordConfirmError.textContent = ''; 
        passwordConfirmError.classList.remove('active');
    } else {
        passwordConfirmError.textContent = 'Your password does not match.';
        passwordConfirmError.classList.add('active');
    }
})

function testPasswordMatch() {
    return password.value == passwordConfirm.value;
}