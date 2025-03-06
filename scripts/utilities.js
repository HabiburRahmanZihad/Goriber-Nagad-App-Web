function getInputValueById(id) {
    const value = document.getElementById(id).value;
    return parseInt(value);
}
function getInputTextById(id) {
    const text = document.getElementById(id).innerText;
    return parseInt(text);
}

let mainBalance = getInputTextById('main-Balance');
console.log(mainBalance);
console.log(typeof mainBalance);