const passwordBox = document.getElementById('password');
const generateButton = document.getElementById('generate-button');
const copy = document.getElementById('copy');

const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
const number = '0123456789';
const symbol = '!@#$%^&*()-_+=[]{};:,.<>/?|';
const length = 12;

const allChars = upperCase + lowerCase + number + symbol;

function generatePassword() {
    let password = '';
    while (length > password.length) {
        password += allChars[Math.floor(Math.random() * allChars.length)];
    }
    passwordBox.value = password;  
}

function copyText() {
    passwordBox.select();
    document.execCommand("copy");
}

generateButton.addEventListener('click', generatePassword);
copy.addEventListener('click', copyText);