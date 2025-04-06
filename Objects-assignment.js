/**
 * Create an Employee constructor function that:
 * - Takes name, department, and baseSalary as parameters
 * - Has methods:
 *   - calculateBonus() that returns 10% of baseSalary for 'IT', 15% for 'HR', and 7% for others
 *   - generateId() that creates a unique employee ID (first 2 letters of name + random 4-digit number)
 *   - getSummary() that returns a string with all employee details
 * 
 * Then create 5 employee objects and:
 * 1. Store them in an array
 * 2. Find the employee with highest bonus
 * 3. Create a function that groups employees by department
 * 4. Add a promotion method that increases baseSalary by 15% and changes department
 */

function Employee(name, department, baseSalary) {
    this.name = name;
    this.department = department;
    this.baseSalary = baseSalary;

    this.calculateBonus = function () {
    if (this.department === "IT") {
        return this.baseSalary * 0.10;
    } else if (this.department === "HR") {
        return this.baseSalary * 0.15;
    } else {
        return this.baseSalary * 0.07;
    }
    };

    this.generateId = function () {
    let firstTwo = this.name.slice(0, 2).toUpperCase();
      let randomNum = Math.floor(Math.random() * 9000) + 1000;
     return firstTwo + randomNum;
    };

    this.getSummary = function () {
    return "Name: " + this.name +
        ", Department: " + this.department +
        ", Salary: " + this.baseSalary +
        ", Bonus: " + this.calculateBonus() +
        ", ID: " + this.generateId();
    };

    this.promote = function (newDepartment) {
      this.baseSalary = this.baseSalary * 1.15;
    this.department = newDepartment;
    };
}

  // Create 5 employees
let emp1 = new Employee("Alice", "IT", 50000);
let emp2 = new Employee("Brian", "HR", 55000);
let emp3 = new Employee("Cynthia", "Finance", 48000);
let emp4 = new Employee("David", "IT", 60000);
let emp5 = new Employee("Eva", "Marketing", 45000);

  // Store in array
let employees = [emp1, emp2, emp3, emp4, emp5];

  // Find employee with highest bonus
let highestBonus = employees[0];
for (let i = 1; i < employees.length; i++) {
    if (employees[i].calculateBonus() > highestBonus.calculateBonus()) {
    highestBonus = employees[i];
    }
}
console.log("Highest Bonus:", highestBonus.name);

  // Group by department
function groupByDepartment(arr) {
    let result = {};
    for (let i = 0; i < arr.length; i++) {
    let dept = arr[i].department;
    if (!result[dept]) {
        result[dept] = [];
    }
    result[dept].push(arr[i]);
    }
    return result;
}

let grouped = groupByDepartment(employees);
console.log("Grouped by department:", grouped);

  // Promote one employee
emp3.promote("Management");
console.log(emp3.getSummary());
  








/**
 * Create a Product object with:
 * - Properties: name, price, inventory, discounts (array)
 * - Methods:
 *   - addDiscount(type, value) where type can be 'percentage' or 'fixed'
 *   - calculateFinalPrice() that applies all discounts in correct order
 *   - restock(amount) that updates inventory and returns new stock level
 *   - a static method comparePrices(productA, productB) that returns the cheaper product
 * 
 * Then:
 * 1. Create 3 products with various discounts
 * 2. Implement a function that finds all products with inventory < 10
 * 3. Create a ShoppingCart object that can add/remove products and calculate total
 * 4. Add a method to apply a coupon to all products in cart
 */

/**
 * Create a UserProfile object with:
 * - Properties: username, posts (array), friends (array), isPrivate
 * - Methods:
 *   - addPost(content, type) where type can be 'text', 'image', 'video'
 *   - addFriend(userProfile) with mutual friendship implementation
 *   - generateFeed() that returns posts based on privacy settings
 *   - analyzeActivity() that calculates engagement metrics
 * 
 * Then:
 * 1. Create 5 user profiles and establish friendships
 * 2. Implement a search function across all profiles
 * 3. Create a function to find the most active user
 * 4. Add a method to detect potential fake accounts (based on activity patterns)
 */