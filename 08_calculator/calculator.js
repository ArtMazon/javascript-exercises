const add = function() {

  return arguments[0]+arguments[1];

};

const subtract = function() {
  return arguments[0]-arguments[1];
	
};

const sum = function() {

  if(arguments[0].length ==0){
    return 0;
  }

  return arguments[0].reduce((sum,current)=>sum+current);


	
};

const multiply = function() {

  return arguments[0].reduce((multiplication,current) => multiplication*current);

};

const power = function() {

  return arguments[0]**arguments[1];
	
};

const factorial = function() {

  
  if(arguments[0] == 0){
    return 1;
  }

  let factorial = 1;
  for(let i = arguments[0]; i > 1 ; i-- ){
    factorial *= i;
  }

  return factorial;
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
