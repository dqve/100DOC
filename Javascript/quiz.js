/*
 * Programming Quiz: Murder Mystery (3-4)
 */

// change the value of `room` and `suspect` to test your code
var room = "dining room";
var suspect = "Mr. Parkes";

var weapon = "";
var solved = false;

if (room == "dining room") {
    weapon = "pool stick";
} else if (room == "gallery") {
    weapon = "trophy";
} else if (room == "billiards room") {
    weapon = "pool stick";
} else {
    weapon = "knife";
}

if ("dining room" === room) {
    solved = true;
} else if ("gallery" === room) {
    solved = true;
} else if ("billiards room" === room) {
    solved = true;
} else {
    solved = true;
}

if (solved) {
	console.log(""+suspect+"did it in the "+room+" with the "+weapon+"!");
}


/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;


if (checkBalance === true){

if (isActive === true && balance > 0) {
	console.log("Your balance is $"+balance.toFixed(2)+".")
} else if (isActive !== true) {
	console.log("Your account is no longer active")
} else if (balance <= 0) {
	console.log("Your account is empty.")
}
} else {
	console.log("Thank you. Have a nice day!");
}


/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a 
 *__________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

// change the values of `flavor`, `vessel`, and `toppings` 
//to test your code

var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

if ((flavor === "vanilla" || flavor === "chocolate") 
	&& (vessel === "cone" || vessel === "bowl")
	&& (toppings === "sprinkles" || toppings === "peanuts")) {
console.log("I'd like two scoops of "+flavor+" ice cream in a "+vessel+" with "+toppings+".")
} else {
	console.log("Sorry that is not available") 
}

/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var sw = 23;
var sl = 30;
var ss = 8.71;

if ((20 > sw >= 18) && (29 > sl >= 28) && (8.13 > ss >= 8.38)) {
	console.log("S")
} else if((22 > sw >= 20) && (30 > sl >= 29) && (8.63 > ss >= 8.38)){
	console.log("M")
} else if (((24 > sw >= 22) && (31 > sl >= 30) && (8.88 > ss >= 8.63))) {
	console.log("L")
} else {
	console.log("N/A")
}



/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = (eatsPlants && eatsAnimals? "omnivore" : (eatsAnimals? "carnivore" : "herbivore"))

console.log(category);

/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

// change the value of `education` to test your code
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;


switch (education) {
	case "no high school diploma":
		salary = 25636;
		break;
	case "a high school diploma":
		salary = 35256;
		break;
	case "an Associate's degree":
		salary = 41496;
		break;
	case "a Bachelor's degree":
		salary = 59124;
		break;
	case "a Master's degree":
		salary = 69732;
		break;
}

console.log("In 2015, a person with "+education+" earned an average of "+salary+"/year.")


/*
 * Programming Quiz: JuliaJames (4-1)
 */

var x = 1;

while (x <= 100) {
   if (x%3 === 0 && x%5 === 0) {
   	console.log("JuliaJames")
   } else if (x%3 === 0) {
   	console.log("Julia")
   } else if (x%5 === 0) {
   	console.log("James")
   } else {
   	console.lo(x)
   }

   X += 1;
    // print Julia, James, or JuliaJames
    // increment x
}



/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;

while (num >= 1) {
	if (num !== 1) {
		console.log(num +" bottles of juice on the wall! "+ num +" bottles of juice! "+ 
			"Take one down, pass it around... "+ (num - 1) +" bottles of juice on the wall!")
	} else{
		console.log(num +" bottle of juice on the wall! "+ num +" bottles of juice! "+ 
			"Take one down, pass it around... "+ (num - 1) +" bottles of juice on the wall!")
	}

	num -= 1;
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}

/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
var lo = 60;

while (lo >= 0) {

	switch(lo){
		case 50:
		 console.log("Orbiter transfers from ground to internal power");
		break;
		case 31:
		 console.log("Ground launch sequencer is go for auto sequence start");
		break;
		case 16:
		 console.log("Activate launch pad sound suppression system");
		break;
		case 10:
		 console.log("Activate main engine hydrogen burnoff system");
		break;
		case 6:
		 console.log("Main engine start");
		break;
		case 0:
		 console.log("Solid rocket booster ignition and liftoff!");
		break;
		default:
		 console.log("T-"+lo+" seconds");
		break;
	}

	lo -= 1;

}



/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// This builds a triangle


function buildTriangle(nol){
	for (var i = 1; i <= nol; i++) {
		console.log(makeLine(i));
	}
}

buildTriangle(6);

// This builds an inverse triangle

function buildTriangle(nol){
	for (var i = nol; i >= 0; i--) {
		console.log(makeLine(i));
	}
}

buildTriangle(6);

/*
 * Programming Quiz: Laugh (5-4)
 */

var laugh = function(num){
    var ha = "";
    for (i = 1; i <= num; i++){
        ha = ha + "ha";
    }
return ha;
}

console.log(laugh(10));



/*
 * Programming Quiz: Cry (5-5)
 */

// your code goes here
var cry = function cry () {
    return "boohoo!";
}
console.log(cry());



/*
 * Programming Quiz: Inline Functions (5-6)
 */


function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

emotions("happy", function(num){
    var ha = "";
    var num = 2;
    for (i = 1; i <= 2; i++){
        ha = ha + "ha";
    }
return ha;
});



/*
 * Programming Quiz: UdaciFamily (6-1)
 */
 var udaciFamily = ["Julia", "James", "David"];




 /* Programming Quiz: Colors of the Rainbow (6-4)
 *
 * Use only the splice() method to modify the rainbow variable:
 *  - remove "Blackberry"
 *  - add "Yellow" and "Green"
 *  - add "Purple"
 */

var rainbow = ['Red', 'Orange', 'Blackberry', 'Blue'];

// your code goes here

rainbow.splice(2, 2, "Yellow", "Green", "Purple")


/*
 * Programming Quiz: Quidditch Cup (6-5)
 */

function hasEnoughPlayers(team){
    if (team.length == 7){
    return true;
    } else {
    return false;
    }
}

var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];
console.log(hasEnoughPlayers(team));


/*
 * Programming Quiz: Joining the Crew (6-6)
 */

var captain = "Mal";
var second = "Zoe";
var pilot = "Wash";
var companion = "Inara";
var mercenary = "Jayne";
var mechanic = "Kaylee";

var crew = [captain, second, pilot, companion, mercenary, mechanic];

var doctor = "Simon";
var sister = "River";
var shepherd = "Book";

crew.push(doctor, sister, shepherd)



/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];


test.forEach(
function (loop){
    if(loop > 3){
    loop += 100;    
    }
  console.log(loop);  
});



/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];

var totals = bills.map(function (bill){
   Number(bill += (0.15*bill).toFixed(0));
   return bill;
});



/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];


for (var row = 0; row < numbers.length; row++) {
    for(var col = 0; col < numbers[row].length; col++){
        var num = numbers[row][col];
        if(num%2 == 0){
            numbers[row][col] = "even";
        }
    }
}



/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = { 
  color: "pink",
  isOpen: false,
  open: function() { 
    if (umbrella.isOpen === true) {
      return "The umbrella is already opened!";
    } else {
      umbrella.isOpen = true;
      return "David opens the umbrella!";
    }
   },
  close: function(){
     if (umbrella.isOpen === true){
        umbrella.isOpen = true;
        return "David opened the umbrella !"
     } else {
        console.log("The umbrella is already open");
     }
  }
};



/*
 * Programming Quiz: Menu Items (7-2)
 */

var lumberJack = {
 price : "$9.95",
 name : "The Lumberjack",
 ingredients : ["eggs", "sausage", "toast", "hashbrowns", "pancakes"]    
}


/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
  balance: 1000,
  interestRatePercent: 1,
  deposit: function addMoney(amount) {
    if (amount > 0) {
      savingsAccount.balance += amount;
    }
  },
  withdraw: function removeMoney(amount) {
    var verifyBalance = savingsAccount.balance - amount;
    if (amount > 0 && verifyBalance >= 0) {
      savingsAccount.balance -= amount;
    }
  },
  printAccountSummary : function accountSummary(){
    console.log("Welcome!\n Your balance is currently "+savingsAccount.balance+" and your interest rate is "+savingsAccount.interestRatePercent+"%.")
    }
};


console.log(savingsAccount.printAccountSummary());


/*
 * Programming Quiz: Facebook Friends (7-5)
 */


var facebookProfile = {
 name : "David",
 friends : 5,   
 messages : ["Hello World","I am David","I love to code"],
 postMessage : function postMessages(message) {
     facebookProfile.messages.push(message)
 },
 deleteMessage : function deleteMessage(message,index) {
    facebookProfile.message.splice(index,1,message)
 },
 readMessage : function readMessage(index){
    if(index <= messages.length){ 
    var message = facebookProfile.messages[index];
     console.log(message);}
    else{
     console.log("No message to see here");
    }
 },
 readLastMessage : function readLast(){
    console.log("This is your last message : "+facebookProfile.messages[facebookProfile.messages.length-1])
 },
 addFriend : function addFriend() {
    facebookProfile.friends += 1;
 },
removeFriend : function removeFriend() {
    facebookProfile.friends -= 1;
 }
}


/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name">${animal.name}</h3>
        <img src="${animal.name}.jpg" alt="${animal.name}" class="picture">
        <div class="description">
            <p class="fact">${animal.fact}</p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${animal.scientificName}</li>
                <li><span class="bold">Average Lifespan</span>:${animal.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${animal.speed}</li>
                <li><span class="bold">Diet</span>: ${animal.diet}</li>
            </ul>
            <p class="brief">${animal.summary}</p>
        </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));



/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const one = things;
const two = '';
const three = '';

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

let [one, , ,two, , , ,three] = things;

console.log(one,two,three);

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

for (day of days){
     console.log("day")
}

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here

function average(...nums) {
  let total = 0;  
  for(const num of nums) {
    total += num;
  }
    var avg = total / nums.length;
  return avg;
}
console.log(average(2, 6));
console.log(average(2, 3, 3, 5, 7, 10));
console.log(average(7, 1432, 12, 13, 100));
console.log(average());



/*
 * I just did this because I am a fucking genius
 * This iterates through the objects keys and values
 * Giving an output, let me fiest make it known,
 * This is supposedly impossible but I came along !!
 */

// your code goes here

const populations = {
  china: 1379000000,
  brazil: 207700000,
  india: 1324000000,
  unitedStates: 323100000
};

var popl = Object.keys(populations)

for(pop of popl) {
    console.log(`The population in ${pop} is ${populations[pop]}`);
}

//The population in china is 1379000000
//The population in brazil is 207700000
//The population in india is 1324000000
//The population in unitedStates is 323100000


/*

Create an object called `chameleon` with two properties:

1. `color`, whose value is initially set to 'green' or 'pink'
2. `changeColor`, a function which changes `chameleon`'s `color` to 'pink'
    if it is 'green', or to 'green' if it is 'pink'

*/

const chameleon = {
    color: 'green',
    color2: 'pink',
    changeColor: function (){
        let colorNow = this.color;
        colorNow = this.color2;
        console.log(`chameleon just changed it's color to ${colorNow}`);
    }
}

chameleon.changeColor()


/*

Declare a function named `higherOrderFunction` that takes no arguments,
and returns an anonymous function.

The returned function itself takes no arguments as well, and simply
returns the number 8.

*/
const higherOrderFunctions = function() {
    return function() {
        return 8;
    }
    

}

higherOrderFunctions()();
// or
let thisisit = higherOrderFunctions();
thisisit();


/* 03. Callbacks Quiz 3-1
 * Using map()
 *
 * Using the musicData array and map():
 *   - Return a string for each item in the array in the following format:
 *     <album-name> by <artist> sold <sales> copies
 *   - Store the returned data in a new albumSalesStrings variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 *   - Do not format the sales number; leave it as a long string of digits
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const albuSalesStrings = musicData.map(function (nusicData) {
    console.log(`${nusicData.name} by ${nusicData.artist} sold ${nusicData.sold} copies`)

});

console.log(albumSalesStrings);


/* Using filter()
 *
 * Using the musicData array and filter():
 *   - Return only album objects where the album's name is
 *     10 characters long, 25 characters long, or anywhere in between
 *   - Store the returned data in a new `results` variable
 *
 * Note:
 *   - Do not delete the musicData variable
 *   - Do not alter any of the musicData content
 */

const musicData = [
    { artist: 'Adele', name: '25', sales: 1731000 },
    { artist: 'Drake', name: 'Views', sales: 1608000 },
    { artist: 'Beyonce', name: 'Lemonade', sales: 1554000 },
    { artist: 'Chris Stapleton', name: 'Traveller', sales: 1085000 },
    { artist: 'Pentatonix', name: 'A Pentatonix Christmas', sales: 904000 },
    { artist: 'Original Broadway Cast Recording', 
      name: 'Hamilton: An American Musical', sales: 820000 },
    { artist: 'Twenty One Pilots', name: 'Blurryface', sales: 738000 },
    { artist: 'Prince', name: 'The Very Best of Prince', sales: 668000 },
    { artist: 'Rihanna', name: 'Anti', sales: 603000 },
    { artist: 'Justin Bieber', name: 'Purpose', sales: 554000 }
];

const results = 'Replace this message with your code!';

console.log(results);



/*

Declare a function named `expandArray()` that:

* Takes no arguments
* Contains a single local variable, `myArray`, which points to [1, 1, 1]
* Returns an anonymous function that directly modifies `myArray` by
  appending another `1` into it
* The returned function then returns the value of `myArray`

*/


function expandArray() {
let myArray = [1,1,1];

return function modifyArray(){
    myArray.push(1);
    return myArray;
    }
}

solution()

/*

 * Examples for shirt design

*/

const developer = {
coffee: true,
sleep: false,
bend: function (){
console.log(`I love algorithms and shi`);},
fend: function(){
console.log(`we own this world rally, and you know it`)}, 
}

function fenddev() {
this.software = `Javascript`;
this.likes = `design`;
}

fenddev.prototype = developer;

const benddev = Object.create(developer)

//example two

const greet = (name = `Person`, greeting = `Hello`) => `${greeting} awesome ${name}`

greet();
"Hello awesome Person"
greet("__","__")
"__ awesome __"
greet("Greeting in yourlang","yourname")
"yourname awesome Greeting in yourlang"
greet(`"yourname"`,`"Greeting in yourlang"`)
""Greeting in yourlang" awesome "yourname""

/*
 * End of examples for shirt design
*/


/*
 * Part 03 module 03 03-Lesson
 * 11. Quiz: Using Default Function Parameters (2-2)
 * Create a buildHouse() function that accepts an object as a default parameter. The object should set the following properties to these default values:
 *
 * floors = 1
 * color = 'red'
 * walls = 'brick'
 * The function should return the following if no arguments or any empty object is passed to the function.
 *
 * Your house has 1 floor(s) with red brick walls.
*/


	const buildHouse = ({floors = 1, color = 'red', walls = 'brick'} = {}) => {    let nof   = floors !== 1 ? 'floors' : 'floor';
        let callit = floors < 1 ? 'No' : floors;
        console.log(`Your house has ${callit} ${nof} with ${color} ${walls} walls.`)
	}
   //This is an optimized answer


//ES5 "Class" AND Objects

function Plane(numEngines) {
  this.numEngines = numEngines;
  this.enginesActive = false;
}

Plane.prototype.pilot = true;

Plane.prototype.startEngines = function () {
      const catchIt = this;
      let engineStatus = catchIt.pilot == true ? 
        "starting engines..." : "Can't start, no pilot";
  
    console.log(engineStatus);
  this.enginesActive = true;
};

Plane.prototype.stopEngines = function () {
   const catchIt2 = this;
      let engineStatus = catchIt2.enginesActive == true ? 
        "stopping engines..." : "Engine, already switched off";
  
    console.log(engineStatus);
  this.enginesActive = false; 
};

const richardsPlane = new Plane(1);
richardsPlane.startEngines();

const jamesPlane = new Plane(4);
jamesPlane.startEngines();


	ul#nav>li*4



/*
 * Go over .call and .create and .prototype and .constructor functions
 * Also go over the super() function
 * Also go over typeOf
 * setTimeOut and others similar
 * Mathround and other math functions
 * When to use Var, const, let
 * Application of promise, proxy, .map, .set
 * Literal implimentation traps, generator, iterantion and iterable
 * Check out Polyfill
 * Javascript ES6 cookbook
 * Get and Set method
 * use of _ in variable declaration
 */

/* Programming Quiz: Building Classes and Subclasses (2-3)
 */

class Vehicle {
	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
		this.color = color;
		this.wheels = wheels;
		this.horn = horn;
	}

	honkHorn() {
		console.log(this.horn);
	}
}

// your code goes here

class Bicycle extends Vehicle {
    constructor(wheels = 2, horn = 'honk honk') {
        super(wheels, horn);
        this.wheels = wheels;
        this.horn = horn;
    }

    honkHorn() {
        super.honkHorn()
    }
}


// tests
const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk


/*
 * Using array destructuring, fix the following code to print the keys and values of the `members` Map to the console.
 */

const members = new Map();

members.set('Evelyn', 75.68);
members.set('Liam', 20.16);
members.set('Sophia', 0);
members.set('Marcus', 10.25);

for (const member of members) {
    console.log(member[0], member[1]);
}
