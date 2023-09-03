const removeFromArray = function(array) {


    const valuesToRemove = Array.prototype.slice.call(arguments, 1);

  


    for(const value of valuesToRemove){
     
        while(removeFirstInstanceOfElement(array,value)!= -1){
            console.log(value)
            console.log(array);
            array = removeFirstInstanceOfElement(array,value);
            console.log(array);
        }
        

        
    }






    return array;
    




};









function removeFirstInstanceOfElement(array,value) {

    if(array.indexOf(value) != -1 ){
        

        const leftSideArray = array.slice(0,array.indexOf(value));
        
        const rightSideArray =array.slice(array.indexOf(value)+1);
    

        return leftSideArray.concat(rightSideArray);
    }

    return -1;



    
}

// Do not edit below this line
module.exports = removeFromArray;
