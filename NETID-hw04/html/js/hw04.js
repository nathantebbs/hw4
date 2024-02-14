/** 
 * Part 1
 * 
 * This code should run as-is in your HTML page as soon as you have successfully 
 * loaded this Javascript file into your HTML page.
 */
function runPart1(event) {
    var answerElement = document.getElementById("part1output")
    answerElement.textContent = "Javascript file loaded!"
}
window.addEventListener("load", runPart1)


/** 
 * Part 2
 * Handle a basic click event.
 */
// Place code from Part 2 of the homework assignment here
function runPart2(event) {
  var answerElement = document.getElementById("part2answer")
  answerText = `${event.target.id} clicked. x(${event.x}) y(${event.y})`
  answerElement.textContent = answerText
}
part2 = document.getElementById("part2button")
part2.addEventListener("click", runPart2)



/** 
 * Part 3
 * Create a Date Object.
 */
function runPart3(event) {
    // Create a new Date object and store it in a new variable.
    const date1 = new Date("2024, 2, 14")
    // Call the toDateString() method on your variable, and store
    //     the result in a new variable named answerText.
    var answerText = date1.toDateString();

    // Obtain a reference to the part3answer element and 
    //     store it in a variable named answerElement.
    var answerElement = document.getElementById("part3answer")
    // Assign the answerText to the answerElement's textContent property.
    answerElement.textContent = answerText
}

// Obtain a reference to the part3button element, and store it
//     in a variable named part3
part3 = document.getElementById("part3button")
// Attach an event listener to the part3 element's click event
//     and pass it our runPart3 function.
part3.addEventListener("click", runPart3)


/** 
 * Part 4
 * Splitting a String.
 */
function runPart4(event) {
    // Obtain a reference to the part4input element and 
    //     store it in a variable named inputElement.
    var inputElement = document.getElementById("part4input")
    
    // Get the value from the text input element and store it 
    //     in a variable named inputString.
    var inputString = inputElement.value

    // Create an array from the inputString by separating each part 
    //     delimited by a comma into a new array element and store
    //     it in a variable named inputArray
    var inputArray = inputString.split(",")
    
    // Make a nicely formatted string of the inputArray using the 
    //     JSON.stringify() method, and store the result in a 
    //     variable named answerText.
    answerText = JSON.stringify(inputArray)
    
    // Obtain a reference to the part4answer element, and store it
    //     in a variable named answerElement.
    var answerElement = document.getElementById("part4answer")
    
    // Update the textContent of the answerElement with the answerText.
    answerElement.textContent = answerText
}   
// Obtain a reference to the part4button element, and store it
//     in a variable named part4.
part4 = document.getElementById("part4button")

// Attach an event listener to the part4 element's click event
//     and pass it our runPart4 function.
part4.addEventListener("click", runPart4)


/** 
 * Part 5
 * Fibonacci class.
 */
class Fibonacci {
    constructor(firstNumber, secondNumber) {
        // Initialize a previousNumber property to firstNumber
        this.previousNumber = firstNumber
        // Convert to a Number in case it comes in as a string
        this.previousNumber = Number(this.previousNumber)

        // Initialize a currentNumber property to secondNumber
        this.currentNumber = secondNumber
        // Convert to a Number in case it comes in as a string
        this.currentNumber = Number(this.currentNumber)
    }
    // Create a getNextValue() method.
    getNextValue () {
        // Calculate the next value and store it in a local temporary variable

        var tmp = this.previousNumber + this.currentNumber
        
        // Set the previous number to the current number
    
        this.previousNumber = this.currentNumber

        // Set the current number to the next value

        this.currentNumber = tmp
        
        // return the next value
        
        return tmp
        
    }
}


function runPart5(event) {
    // Obtain a reference to the part5input element and 
    //     store it in a variable named inputElement.
    var inputElement = document.getElementById("part5input")
    
    // Get the value from inputElement and store it in startValues
    var startValues = inputElement.value  

    // Split the startValues into an array named startValuesArray
    var startValuesArray = startValues.split(",")
    
    // Create a new Fibonacci object, passing in the first and 
    //     second numbers in the constructor as arguments.
    var fib = new Fibonacci(startValuesArray[0], startValuesArray[1])
    
    // Create an empty array named valuesArray
    
    var valuesArray = []
    
    // Push the previousNumber from your object on to valuesArray
    
    valuesArray.push(fib.previousNumber)
    
    // Push the currentNumber from your object on to valuesArray
    valuesArray.push(fib.currentNumber)
    
    
    // Run a loop 10 times 
    for (i = 0 ; i < 10 ; i++) {
      // Call getNextValue() on your object and push the 
      //     result on to valuesArray.
      var next = fib.getNextValue()
      valuesArray.push(next)
    }

    // Join all the elements of valuesArray together with ", "
    //     and store the result in answerText.
    var answerText = valuesArray.join(", ")

    // Obtain a reference to the part5answer element, and store it
    //     in a variable named answerElement.
    var answerElement = document.getElementById("part5answer")
    
    // Update the textContent of the answerElement with the answerText.
    answerElement.textContent = answerText
}
// Obtain a reference to the part5button element, and store it
//     in a variable named part5.
var part5 = document.getElementById("part5button")


// Attach an event listener to the part5 element's click event
//     and pass it our runPart5 function.
part5.addEventListener("click", runPart5)


/** 
 * Part 6
 * API Call.
 */
function updatePart6answer(answerText) {
    // Obtain a reference to the part6answer element, and store it
    //     in a variable named answerElement.
    var answerElement = document.getElementById("part6answer")
    
    // Update the textContent of the answerElement with the answerText.
    answerElement.textContent = answerText
    
}

function runPart6(event) {
    // Obtain a reference to the part6input element, and store it
    //     in a variable named inputElement.
    var inputElement = document.getElementById("part6input")
    
    // Store the value of inputElement in a variable named inputString
    var inputString = inputElement.value

    // Create a new variable called apiCall. Concatenate the API URL base
    //     with the inputString and assign the result to apiCall.
    //     See the example URL in Part 6.
    var apiCall = `https://csc346chat.test.apps.uits.arizona.edu/healthcheck?fruit=${inputString}`

    // Use the fetch() API to call the apiCall variable.
    // .then() handle the response, and return the .text() from it 
    // .then() handle the text from the previous step and pass 
    //      it to updatePart6answer.
    fetch(apiCall)
      .then(response => response.text())
      .then(data => updatePart6answer(data))
      .catch(error => console.error("Error fetching data:", error))
}
// Obtain a reference to the part6button element, and store it
//     in a variable named part6.
var part6 = document.getElementById("part6button")

// Attach an event listener to the part6 element's click event
//     and pass it our runPart6 function.
part6.addEventListener("click", runPart6)


