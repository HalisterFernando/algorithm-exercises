{
/* Create an algorithm that runs through a one-dimensional array containing letters and numbers: [ “a”, 10, “b”, “hola”, 122, 15]
Get an array containing just the letters
Get an array containing just the numbers
Get the highest number from the array above */


function manipulateArray(arr) {
    const arrayOfNumbers = arr.every((el) => typeof el === "number");
    const arrayOfLetters = arr.every((el) => typeof el === 'string');

    if (arrayOfNumbers)  {
        console.log(arr);
    }
    if (arrayOfLetters) { 
        console.log(arr);
    } 
    const filteredArr = arr.filter((el) => typeof el === 'number')
    
    return  Math.max(...filteredArr)


}
console.log(manipulateArray([ 'a', 10, 'b', 'hola', 122, 15]))
}

{
    /* Create a hashmap (or a simple object in PHP) that contains the elementary functions of addition, subtraction, multiplication, and division.
 */

    const mathFunctions = new Map();

    // Add math functions to the hashmap
    mathFunctions.set("addition", function(arr) {

      return arr.reduce((acc, curr) => acc + curr, 0);
    });
    mathFunctions.set("subtraction", function(arr) {
        return arr.reduce((acc, curr) => acc - curr, 0);

    });
    mathFunctions.set("multiplication", function(a, b) {
      return a * b;
    });
    mathFunctions.set("division", function(a, b) {
        if (b === 0) return 'Cannot divide by zero'
      return a / b;
    });
    
    const a = 5;
    const b = 3;

    console.log("Addition: " + mathFunctions.get("addition")([a, b]));
    console.log("Subtraction: " + mathFunctions.get("subtraction")([a, b]));
    console.log("Multiplication: " + mathFunctions.get("multiplication")(a, b));
    console.log("Division: " + mathFunctions.get("division")(a, b));
}

{
    // Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC

    
}