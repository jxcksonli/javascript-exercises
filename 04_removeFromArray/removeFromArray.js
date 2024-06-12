const removeFromArray = function(arr, num) {
    // arr is array, num is number to remove
    let res = [];

    for (i=0; i<arr.length; i++){
        if (arr[i] != num){
            res.push(arr[i])
        }
    }

    return res
};

// Do not edit below this line
module.exports = removeFromArray;
