const sumAll = function(num1, num2 ) {
    if (typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR"
    }

    if (num1 <= 0 || num2 <= 0){
        return "ERROR"
    }

    if (num1 == num2){
        return num1
    }

    let res = 0
    let biggerNo = 0
    let smallerNo = 0
    if (num1 > num2){
        biggerNo = num1
        smallerNo = num2
    } else {
        biggerNo = num2
        smallerNo = num1
    }

    for (i=smallerNo;i<=biggerNo;i++){
        res += i;
    }

    return res

};

// Do not edit below this line
module.exports = sumAll;


