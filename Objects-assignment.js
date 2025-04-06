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
console.log("=============================");

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
// Step 1: Create the Product function (template for products)
function Product(name, price, inventory) {
  this.name = name;
  this.price = price;
  this.inventory = inventory;
  this.discounts = [];

  // Step 2: Add discount method
  this.addDiscount = function(type, value) {
    this.discounts.push({ type: type, value: value });
  };

  // Step 3: Calculate final price after all discounts
  this.calculateFinalPrice = function() {
    let finalPrice = this.price;
    
    // Apply percentage discounts first
    for (let i = 0; i < this.discounts.length; i++) {
      if (this.discounts[i].type === "percentage") {
        finalPrice -= finalPrice * (this.discounts[i].value / 100);
      }
    }

    // Apply fixed discounts
    for (let i = 0; i < this.discounts.length; i++) {
      if (this.discounts[i].type === "fixed") {
        finalPrice -= this.discounts[i].value;
      }
    }

    return finalPrice;
  };

  // Step 4: Restock method to increase inventory
  this.restock = function(amount) {
    this.inventory += amount;
    return this.inventory;
  };
  
  // Step 5: Static method to compare two products' prices
  Product.comparePrices = function(productA, productB) {
    if (productA.calculateFinalPrice() < productB.calculateFinalPrice()) {
      return productA;
    } else {
      return productB;
    }
  };
}

// Step 6: Create 3 products
let product1 = new Product("Shirt", 2000, 15);
let product2 = new Product("Shoes", 5000, 8);
let product3 = new Product("Bag", 3000, 25);

// Add discounts to products
product1.addDiscount("percentage", 10); // 10% off
product2.addDiscount("fixed", 500);     // ₦500 off
product3.addDiscount("percentage", 15); // 15% off

// Step 7: Find products with inventory < 10
function findLowStockProducts(products) {
  let lowStock = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].inventory < 10) {
      lowStock.push(products[i]);
    }
  }
  return lowStock;
}

let allProducts = [product1, product2, product3];
let lowStockProducts = findLowStockProducts(allProducts);
console.log("Low stock products:", lowStockProducts);

// Step 8: Create ShoppingCart object
function ShoppingCart() {
  this.products = [];
  
  // Add product to cart
  this.addProduct = function(product) {
    this.products.push(product);
  };
  
  // Remove product from cart
  this.removeProduct = function(productName) {
    this.products = this.products.filter(p => p.name !== productName);
  };
  
  // Calculate total price of all products in cart
  this.calculateTotal = function() {
    let total = 0;
    for (let i = 0; i < this.products.length; i++) {
      total += this.products[i].calculateFinalPrice();
    }
    return total;
  };

  // Apply coupon to all products
  this.applyCoupon = function(discountValue) {
    for (let i = 0; i < this.products.length; i++) {
      this.products[i].addDiscount("fixed", discountValue);
    }
  };
}

// Step 9: Testing the ShoppingCart
let cart = new ShoppingCart();
cart.addProduct(product1);
cart.addProduct(product2);

console.log("Total price of cart:", cart.calculateTotal());

// Apply a coupon
cart.applyCoupon(200); // ₦200 off for each product
console.log("Total price after coupon:", cart.calculateTotal());
console.log("=============================");

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


function UserProfile(username, isPrivate) {
  this.username = username;
  this.posts = [];
  this.friends = [];
  this.isPrivate = isPrivate;

  this.addPost = function(content, type) {
    this.posts.push({ content: content, type: type });
  };

  this.addFriend = function(friendProfile) {
    this.friends.push(friendProfile);
    friendProfile.friends.push(this);
  };

  this.generateFeed = function() {
    if (this.isPrivate) {
      return this.posts;
    } else {
      let allPosts = [];
      for (let friend of this.friends) {
        allPosts = allPosts.concat(friend.posts);
      }
      return allPosts.concat(this.posts);
    }
  };

  this.analyzeActivity = function() {
    return this.posts.length;
  };
}

let user1 = new UserProfile("Alice", true);
let user2 = new UserProfile("Bob", false);
let user3 = new UserProfile("Charlie", true);
let user4 = new UserProfile("David", false);
let user5 = new UserProfile("Eve", false);

user1.addFriend(user2);
user2.addFriend(user3);
user3.addFriend(user4);
user4.addFriend(user5);

user1.addPost("First post", "text");
user2.addPost("Image post", "image");
user3.addPost("Video post", "video");
user4.addPost("Another post", "text");
user5.addPost("Eve's post", "text");

function searchProfiles(profiles, username) {
  return profiles.filter(profile => profile.username.toLowerCase().includes(username.toLowerCase()));
}

let foundProfiles = searchProfiles([user1, user2, user3, user4, user5], "alice");
console.log(foundProfiles);

function findMostActiveUser(profiles) {
  let mostActiveUser = profiles[0];
  for (let i = 1; i < profiles.length; i++) {
    if (profiles[i].analyzeActivity() > mostActiveUser.analyzeActivity()) {
      mostActiveUser = profiles[i];
    }
  }
  return mostActiveUser;
}

let mostActive = findMostActiveUser([user1, user2, user3, user4, user5]);
console.log("Most Active User:", mostActive.username);

function detectFakeAccounts(profiles) {
  return profiles.filter(profile => profile.analyzeActivity() < 2);
}

let fakeAccounts = detectFakeAccounts([user1, user2, user3, user4, user5]);
console.log("Potential Fake Accounts:", fakeAccounts.map(account => account.username));
