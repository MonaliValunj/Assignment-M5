// ADD A FUNCTION CALLED CALCULATE
function calculate(x,y,operation){
    switch(operation){
        case "add":
           return window.alert(`Addition is: ${x+y}`)
            
        case "subtract":
            return window.alert(`Subtraction is: ${x-y}`)
        
        case "multiply":
            return window.alert(`Multification is: ${x*y}`)
             
         case "divide":
            return window.alert(`Division is: ${x/y}`)            
    }

}

// COLLECT FIRST NUMBER FROM USER
let num1 = parseInt(prompt("Enter first number:"))

// COLLECT SECOND NUMBER FROM USER
let num2 = parseInt(prompt("Enter second number:"))


// COLLECT OPERATION TO PERFORM (+,-,*,/) FROM USER
let operation;
while(true){
    operation = prompt("Enter operation you want perform (add, subtract, multiply, divide):")

    if(operation === 'add' || operation ==='subtract'|| operation ==='multiply'|| operation ==='divide'){
        break
    }else{
        alert("Invalid operation, Enter again");
    }
}

// CALL THE FUNCTION AND RETURN THE RESULT WITHIN AN ALERT
calculate(num1, num2, operation)
