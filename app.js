console.log("Hello World!\n==========\n");
console.log("Follow the steps in the README.md file to complete the exercises:\n==========\n");

// Exercise 1
let number = Math.floor(Math.random()* 10 + 1);

let userInput = window.prompt("Guess my favorite number between 1 and 10");

if (userInput == number)
{
    console.log(`Congrats! ${number} is my favorite number!`);
}

if (userInput<1 || userInput >10)
{
    console.log(`${number} is out of range`);
}

else if (userInput > number)
{
    console.log("Number you guessed is too high");
}

else if (userInput < number)
{
    console.log("Number you guessed is too low")
}

// Exercise 2

let userInput2 = window.prompt("What flavor snow cone would you like to order? ")

switch (userInput2)
{
    case "strawberry":
        console.log("You get a strawberry snow cone on the house!");
        break; 
    case "cherry":
        console.log("You got it! Cherry is our most popular flavor");
        break; 
    case "coconut":
        console.log("Blue coconut coming right up!");
        break; 
    case "grape":
        console.log("Your grape snow cone is coming right up");
        break; 
    case "mango":
        console.log("Tropical mango is the best!");
        break;
    default: 
        console.log("Sorry, we are out of this flavor.");
        break;     
}
