/*
JavaScript's execution context has two main phases: the Memory Creation Phase and the Execution Phase. These phases occur in the Global Execution Context (where the program starts) and in each Function Execution Context (created when functions are called). Here's how it all works, along with a diagram to illustrate it.

Code Example:
javascript
Copy code
let val1 = 10;
let val2 = 5;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);
Step 1: Global Execution Context Creation
When JavaScript starts running, it creates the Global Execution Context. This context goes through two main phases:

Phase 1: Memory Creation Phase (also called "Hoisting")
In this phase, JavaScript sets up space in memory for all variables and functions but doesn’t assign their final values yet.

val1 and val2 are set to undefined.
addNum is stored as a function definition.
result1 and result2 are set to undefined.
Diagram - Global Memory Creation Phase:

Variable	Value
val1	undefined
val2	undefined
addNum	function
result1	undefined
result2	undefined
Phase 2: Execution Phase
In this phase, JavaScript assigns actual values to variables and starts executing code line by line.

val1 is set to 10.
val2 is set to 5.
Now we reach the line let result1 = addNum(val1, val2);, and a new Function Execution Context is created for addNum because we're calling it.

Step 2: Function Execution Context (for addNum(val1, val2))
When addNum(val1, val2) is called, a new execution context is created just for this function call. It also has a Memory Creation Phase and an Execution Phase.

Memory Creation Phase for addNum(val1, val2)
num1 and num2 are set to undefined.
total is set to undefined.
Diagram - Function Memory Creation Phase:

Variable	Value
num1	undefined
num2	undefined
total	undefined
Execution Phase for addNum(val1, val2)
num1 is assigned the value 10.
num2 is assigned the value 5.
total is calculated as num1 + num2 → 10 + 5 = 15.
The function then returns 15 to result1.

After the function call, this Function Execution Context is deleted.

Diagram - Global Execution Context after addNum(val1, val2) Execution:

Variable	Value
val1	10
val2	5
addNum	function
result1	15
result2	undefined
Step 3: Calling addNum(10, 2) for result2
The same process is repeated for let result2 = addNum(10, 2);:

A new Function Execution Context is created for this call.
Memory Phase: num1, num2, and total are set to undefined.
Execution Phase:
num1 = 10
num2 = 2
total = 10 + 2 = 12
The result, 12, is returned to result2 in the Global Execution Context.
Final Diagram - Global Execution Context after result2:

Variable	Value
val1	10
val2	5
addNum	function
result1	15
result2	12
Summary
Global Execution Context runs first, preparing variables and functions.
When a function is called, a Function Execution Context is created.
Each context has a Memory Creation Phase (sets variables to undefined) and an Execution Phase (assigns values and executes code).
After a function completes, its execution context is deleted, freeing up memory.
This setup ensures organized execution, avoiding conflicts between different parts of the code.

*/


//last in first out LIFO
//understanding the concept of Callstack

/*

The call stack in JavaScript is like a "to-do list" that keeps track of the functions currently being executed and the order in which they were called. Think of it as a stack of trays in a cafeteria — when you add a new tray (function call), it goes on top, and when it’s done, it’s removed from the top of the stack.

Here’s a breakdown of how the call stack works with an example.

How the Call Stack Works
When a function is called, it’s "pushed" onto the top of the call stack.
When a function finishes executing, it’s "popped" off the stack.
The JavaScript engine always runs the function on the top of the stack first, before moving to the next function below it.
Example Code:
javascript
Copy code
function multiply(x, y) {
    return x * y;
}

function square(n) {
    return multiply(n, n);
}

function printSquare(num) {
    let squaredNumber = square(num);
    console.log(squaredNumber);
}

printSquare(4);
Step-by-Step Execution of the Call Stack
1. Start - Global Execution Context
When JavaScript starts executing, it first creates the Global Execution Context and adds it to the stack.

Call Stack:

Global Execution Context
2. printSquare(4) is Called
The printSquare(4) function is called, so a new execution context for printSquare is created and pushed onto the stack.

Call Stack:

printSquare(4) Execution Context
Global Execution Context
3. square(num) is Called Inside printSquare
Within printSquare, the function square(num) is called with num as 4. So, a new execution context for square(4) is created and pushed onto the stack.

Call Stack:

square(4) Execution Context
printSquare(4) Execution Context
Global Execution Context
4. multiply(n, n) is Called Inside square
Within square(4), the function multiply(n, n) is called with n as 4. So, a new execution context for multiply(4, 4) is created and pushed onto the stack.

Call Stack:

multiply(4, 4) Execution Context
square(4) Execution Context
printSquare(4) Execution Context
Global Execution Context
5. multiply(4, 4) Completes
The multiply(4, 4) function finishes executing and returns 16. Its execution context is popped off the stack.

Call Stack:

square(4) Execution Context
printSquare(4) Execution Context
Global Execution Context
6. square(4) Completes
The square(4) function finishes executing and returns 16 to printSquare(4). Its execution context is popped off the stack.

Call Stack:

printSquare(4) Execution Context
Global Execution Context
7. printSquare(4) Completes
The printSquare(4) function completes, printing 16 to the console. Its execution context is popped off the stack.

Call Stack:

Global Execution Context
8. End - Global Execution Context Completes
Once all functions are done, the global execution context is popped off the stack, and the program finishes.

Final Call Stack:

(empty)
Visual Diagram of the Call Stack
Starting Point

mathematica
Copy code
| Global Execution Context |
Calling printSquare(4)

scss
Copy code
| printSquare(4)           |
| Global Execution Context |
Calling square(4) from printSquare

scss
Copy code
| square(4)                |
| printSquare(4)           |
| Global Execution Context |
Calling multiply(4, 4) from square

scss
Copy code
| multiply(4, 4)           |
| square(4)                |
| printSquare(4)           |
| Global Execution Context |
Completing multiply(4, 4)

scss
Copy code
| square(4)                |
| printSquare(4)           |
| Global Execution Context |
Completing square(4)

scss
Copy code
| printSquare(4)           |
| Global Execution Context |
Completing printSquare(4)

mathematica
Copy code
| Global Execution Context |
End - Empty Call Stack

php
Copy code
(empty)
Summary
The call stack keeps track of function calls in the order they are called.
Functions are "pushed" to the stack when they are called and "popped" off when they finish.
JavaScript executes the function on the top of the stack first.
If the call stack gets too full (too many nested function calls), you may get a "stack overflow" error.
*/
