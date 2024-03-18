const CryptoJS = window.CryptoJS;

export function encryptText(inputText) {
    return CryptoJS.AES.encrypt(inputText, 'secret key 123').toString();
}

export function decryptText(encryptedText) {
    const bytes  = CryptoJS.AES.decrypt(encryptedText, 'secret key 123');
    return bytes.toString(CryptoJS.enc.Utf8);
}

export function clearText() {
    return '';
}