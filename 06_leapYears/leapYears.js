const leapYears = function(year) {


    if(divisibleBy(year,4)){
        if(divisibleBy(year,100)){
            if(divisibleBy(year,400)){
                return true
            }else{
                return false
            }

        }else{
            return true
        }


    }else{
        return false;
    }



};


function divisibleBy(number,value) {

    return number % value == 0;
    
}



// Do not edit below this line
module.exports = leapYears;
