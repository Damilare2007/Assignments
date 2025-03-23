// 1. 
// You’re at a grocery store and need to calculate the total cost of your items. Declare variables using let, const, and var to store the prices of three items (e.g., milk, bread, eggs). Log the total cost to the console.

console.log("===== Assignment  1 =====");

const milkPrice = 500.00;
let breadPrice = 1500.00;
var eggPrice = 200.00;

const totalCost = milkPrice + breadPrice + eggPrice;

console.log("Total cost:", totalCost);
console.log("=============================");


// 2. 
// Create a personal profile object with the following properties:

// name (string)

// age (number)

// isStudent (boolean)

// hobbies (array of strings)

// Log the data type of each property using typeof.

console.log("===== Assignment  2 =====");
let personalProfile = {
    name: "Oluwadamilare Tijani",
    age: 18,
    isStudent: true,
    hobbies: ["Watching Anime", "Going on Trips"]
};

console.log(typeof "Oluwadamilare Tijani");
console.log(typeof 18);
console.log(typeof true);
console.log(typeof ["Watching Anime", "Going on Trips"]);
console.log("=============================");


// 3.
// Write a program that takes the user’s first name and last name as input (use prompt or hardcode the values). Concatenate the names to form a full name and log a personalized greeting like:
// "Hello, John Doe! Welcome to our website."


console.log("===== Assignment 3 =====");

let firstName = "John";  
let lastName = "Doe";    

let fullName = `${firstName} ${lastName}`;

console.log(`Hello, ${fullName}! Welcome to our website.`);
console.log("=============================");


// 4. 
// You have a monthly budget of $1000. Declare variables for your expenses (e.g., rent, groceries, entertainment). Perform calculations to determine:

// Total expenses.

// Remaining budget after expenses.

// Percentage of the budget spent on each category.

// Log the results.

console.log("===== Assignment  4 =====");

let monthlybudget = 1000

let rent = 200
let groceries = 400    
let entertainment = 150

let totalExpenses = rent + groceries + entertainment
let budgetremaining = monthlybudget - totalExpenses 

let rentPercentage = (rent / totalExpenses) * 100
let groceriesPercentage = (groceries / totalExpenses) * 100
let entertainmentPercentage = (entertainment / totalExpenses) * 100

console.log("Total expenses: $" + totalExpenses);

console.log("Remaining budget after expenses: $" + budgetremaining);

console.log({
    "Rent Percentage:": `${rentPercentage}%`,
    "Groceries Percentage": `${groceriesPercentage}%`,
    "Entertainment Percentage": `${entertainmentPercentage}%`
})

console.log("=============================");


// 5. 
// Declare variables for:

// isRaining (boolean)

// temperature (number)

// Write a condition to decide what to wear:

// If it’s raining and the temperature is below 15°C, log "Wear a raincoat and boots."

// If it’s not raining and the temperature is above 25°C, log "Wear shorts and a t-shirt."

// Otherwise, log "Wear a jacket."

console.log("===== Assignment  5 =====");

let isRaining = true;
let temperature = 10;
    if (isRaining == true, temperature < 15){
        console.log("Wear a raincoat and boots.");
    } else if (isRaining == false, temperature > 25){
        console.log("Wear shorts and a t-shirt.");
    }else{
        console.log("Wear a Jacket.")
    }

    console.log("=============================");

// 6. 
// Write a program that checks if a person is eligible to vote. Declare variables for:

// age (number)

// isCitizen (boolean)

// Log "You are eligible to vote!" if the person is at least 18 years old AND is a citizen. Otherwise, log "You are not eligible to vote."


console.log("===== Assignment  6 =====");

let age = 18;
let isCitizen = true;
    if (age >= 18, isCitizen == true ){
        console.log("You are eligible to vote!")
    }else{
        console.log("You are not eligible to vote!")
    }

    console.log("=============================");

// 7. 
// You’re running an online store. Declare variables for:

// totalPurchase (number)

// isMember (boolean)

// Write an if-else statement to apply a discount:

// If the total purchase is above $100 AND the customer is a member, apply a 10% discount.

// Otherwise, apply a 5% discount.

// Log the final amount after the discount.

console.log("===== Assignment  7 =====");

let totalPurchase = 1000
let isMember = true

let discount;

    if (totalPurchase > 100, isMember == true){
        discount = totalPurchase * 0.10;
    }else{
        discount = totalPurchase * 0.05;
    }
        
let finalAmount = totalPurchase - discount;

console.log("Final amount after discount: $", finalAmount);

console.log("=============================");

// 8. 
// Write a program that takes a student’s score as input and assigns a grade based on the following:

// 90 or above: "A"

// 80-89: "B"

// 70-79: "C"

// 60-69: "D"

// Below 60: "F"

// Use else if statements to handle the grading logic.

console.log("===== Assignment  8 =====");



console.log("=============================");

// 9.
// Write a program that takes the day of the week as input (e.g., "Monday"). Use a switch statement to log a daily plan:

// "Monday": "Plan the week ahead."

// "Wednesday": "Mid-week review."

// "Friday": "Wrap up work for the week."

// "Saturday" or "Sunday": "Relax and recharge."

// Default: "Stay productive!"

console.log("===== Assignment  9 =====");



console.log("=============================");

// 10. 
// You’re organizing an event with the following rules:

// Attendees must have a ticket.

// They must be at least 18 years old OR be accompanied by an adult (use a boolean variable isWithAdult).

// They must not be on the banned list (use a boolean variable isBanned).

// Write a program that checks if a person can enter the event. Log "Welcome to the event!" if all conditions are met; otherwise, log "Entry denied."

console.log("===== Assignment  10 =====");

let attendeesage = 18
let isWithAdult = false
let isBanned = false

if (attendeesage >= 18 || isWithAdult == true){
    console.log("Welcome to the event!")
}else{
    console.log("Entry denied.")
}

console.log("=============================");




