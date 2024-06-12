const reverseString = function(string) {
    let res = ""

    for (i=1; i<=string.length; i++){
        res += string[string.length-i]
    }

    return res
};

// Do not edit below this line
module.exports = reverseString;
