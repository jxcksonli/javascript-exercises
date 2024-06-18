const fibonacci = function(index) {
    index = Number(index);

    if (index < 0){
        return "OOPS";
    };

    let before = 0;
    let after = 1;
    let temp = before

    if (index == 0){
        return before;
    } else if (index == 1){
        return after;
    }

    for (i=2; i<index; i++){
        temp = before;
        before = after;
        after = temp + after;

    }
    return before + after
};




// Do not edit below this line
module.exports = fibonacci;
