import { encryptText, decryptText, clearText } from './crypto.js';
import { typeEffect } from './ui.js';

const inputTextArea = document.querySelector('.input__container__textarea textarea');
const outputTextArea = document.querySelector('.output__container__textarea textarea');
const encryptButton = document.querySelector('#encryptButton');
const decryptButton = document.querySelector('#decryptButton');
const clearButton = document.querySelector('#clearButton');

encryptButton.addEventListener('click', function() {
    const inputText = inputTextArea.value;
    const encryptedText = encryptText(inputText);
    outputTextArea.value = '';
    typeEffect(outputTextArea, encryptedText);
});

decryptButton.addEventListener('click', function() {
    const inputText = inputTextArea.value;
    const decryptedText = decryptText(inputText);
    outputTextArea.value = '';
    typeEffect(outputTextArea, decryptedText);
});

clearButton.addEventListener('click', function() {
    inputTextArea.value = clearText();
    outputTextArea.value = clearText();
});