const palindromes = function (string) {

    const newString = string.split('').filter((char) => isAlphanumeric(char)).join('').toLowerCase()

    for (i = 0; i <= Math.floor(newString.length / 2); i++){
        if (newString[i] != newString[newString.length-i-1]){
            return false;
        }
    }
    return true;
};

function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
}

// Do not edit below this line
module.exports = palindromes;
