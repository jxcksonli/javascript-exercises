const removeFromArray = function(arr, ...theArgs) {
    // arr is array, num is number to remove
    let res = [];

    for (i=0; i<arr.length; i++){
        if (!theArgs.includes(arr[i])){
            res.push(arr[i]);
        }
    }
    return res
};

// Do not edit below this line
module.exports = removeFromArray;
