const findTheOldest = function(array) {


    let personAges = array.map(person =>{
        if(person.yearOfDeath == undefined){
            person.yearOfDeath = 2023;
        }

        return person.yearOfDeath - person.yearOfBirth;
    })


    oldestAge = 0;

    for (const age of personAges) {

        if(age > oldestAge){
            oldestAge = age;
        }
        
    }

    oldestPersonIndex = personAges.indexOf(oldestAge);



    return array[oldestPersonIndex];

};

// Do not edit below this line
module.exports = findTheOldest;
