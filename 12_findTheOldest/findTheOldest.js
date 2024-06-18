const findTheOldest = function(arrObs) {
    ages = arrObs.map((obj) => ( getYearofDate(obj) - obj.yearOfBirth))

    maxAgeIndex = 0
    maxAge = ages[0]

    for (i = 1; i<ages.length; i++){
        if(ages[i] > maxAge){
            maxAgeIndex = i;
            maxAge = ages[i];
        }
    }

    return arrObs.at(maxAgeIndex);
};


 function getYearofDate(object){
    if (object.yearOfDeath == undefined){
        let dateNow = new Date();
        return dateNow.getFullYear();
    } 
    return object.yearOfDeath
 }
// - You should return the whole person object, but the tests mostly just check to make sure the name is correct.
// There are many ways of doing this using built-in array methods like `reduce`, or even chaining multiple! 




// Do not edit below this line
module.exports = findTheOldest;
