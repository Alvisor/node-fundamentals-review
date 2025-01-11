// Declared
// This functions are declared with the keyword "function"
// They support hoisting
// They´re handy when you need global functions
function add(a, b) {
    return a + b;
  }
  
  // Expression
  // This functions are expressions
  // They are not hoisted
  // They´re handy when you need local functions
  const subtract = function(a, b) {
    return a - b;
  };
  
  // Arrow Function
  // This functions are arrow functions and are declared with the keyword "const" or "let" and operator "=>"
  // They´re handy when you need anonymous functions
  // They are not hoisted
  const multiply = (a, b) => a * b;
  
  // Object Method
  // This functions are object methods
  // They are not hoisted
  // It's util to define object behaviour
  const calculator = {
    divide(a, b) {
      return a / b;
    }
  };
  
  // Construct Function
  // This functions are construct functions
  // They are not hoisted
  // They´re handy when you need to create objects and initialize their properties with a function call 
  function Calculator() {
    this.square = (x) => x * x;
  }
  
  // Generator
  // This functions are generator functions
  // They are not hoisted
  // They´re handy when you need to create sequences of values 
  function* sequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  // Async Function
  // This functions are async functions
  // They are not hoisted
  // They´re handy when you need to perform asynchronous operations
  async function fetchData(url) {
    const response = await fetch(url);
    return response.json();
  }
  