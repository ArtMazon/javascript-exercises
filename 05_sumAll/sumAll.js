const sumAll = function(intialValue, finalValue) {

    if(intialValue < 0 || finalValue < 0){
        return "ERROR";
    }

    if(!(typeof(intialValue) == "number")){
        return "ERROR";
    }
    if(!(typeof(finalValue) == "number")){
        return "ERROR";
    }

    if(finalValue < intialValue){
        let pivot = intialValue;
        intialValue = finalValue;
        finalValue = pivot;
    }

return Math.abs(sumOfFirstNthNumbers(finalValue)-sumOfFirstNthNumbers(intialValue-1));



};


function sumOfFirstNthNumbers(number) {

    return (number*(number+1))/2;
    
}




// Do not edit below this line
module.exports = sumAll;
