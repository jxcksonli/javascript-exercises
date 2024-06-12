const repeatString = function(string, notimes) {
    if (notimes < 0){
        return "ERROR"
    }

    let res = ""

    for (i = 0; i < notimes; i++){
        res = res.concat(string)
    }
    return res

};

// Do not edit below this line
module.exports = repeatString;
