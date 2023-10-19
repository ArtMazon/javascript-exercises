const palindromes = function () {

    let splitString = arguments[0].toLowerCase().split("");

    let filteredValues ="!,. ";




    let filteredSplitString = splitString.filter((character) => !filteredValues.includes(character) )


    let palindromeCount;

    if(splitString.length % 2 == 0){
        palindromeCount = splitString.length / 2;
    }else{
        palindromeCount= (splitString.length-1)/2;
    }

    for(let i = 0; i < palindromeCount; i++){

        if(!(filteredSplitString.at(i) === filteredSplitString.at(-i-1))){
            return false;
        }
    }

  /*   console.log(splitString);
    console.log(filteredSplitString); */

    return true;

};

// Do not edit below this line
module.exports = palindromes;
