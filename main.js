// Typescript 1 to 45 Qs  --- Mehfooz Ali
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//Q 1: install Node.js, Tyoescript and VS Code on your Computer/Laptop.
//Ans 1: DONE
//Q 2: Personal Message: Store a person’s name in a variable and print a message to them, 
//            like “Hello Erik, would you like to learn some TypeScript today?”
//Ans 2:
var personeName = "Mehfooz Ali";
console.log("Hello ".concat(personeName, ", would you like to learn some TypeScript today?"));
//Q 3: Name Cases: Store a person’s name in a variable, and then print that person’s name 
//  in lowercase, uppercase, and titlecase.
//Ans 3:
var name1 = "mehFooz aLI";
console.log(name1.toLowerCase()); //for small letters
console.log(name1.toUpperCase()); //for big/capital letters
console.log(name1.charAt(0).toUpperCase() + name1.slice(1).toLowerCase()); //for 1st char big other small
//Q 4: Famous Quote: Find a quote from a famous person you admire. Print the quote and the 
//name of its author. Your output should look something like the following, including the quotation 
//marks:"Albert Einstein once said, “A person who never made a mistake never tried anything new.”"
//Ans 4:
var author = "Albert Einstein";
console.log(author, 'once said, "A person who never made a mistake never tried anything new."');
//another way
console.log("".concat(author, " once said, \"A person who never made a mistake never tried anything new.\""));
//another way
console.log('Albert Einstein once said, "A person who never made a mistake never tried anything new."');
//Q 5: Famous Quote 2: Repeat Exercise 1, but this time store the famous person’s name in a 
//variable called famous_person. Then compose your message and store it in a new variable called 
//message. Print your message.
//Ans 5:
var famous_person = "Albert Einstein";
var message = "".concat(famous_person, " once said, \"A person who never made a mistake never tried anything new.\"");
console.log(message);
//another way
var quote = '"A person who never made a mistake never tried anything new."';
console.log(famous_person, "once said,", quote);
//Q 6: Stripping Names: Store a person’s name, and include some whitespace characters at the 
//beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once,
//so the whitespace around the name is displayed. Then print the name after stripping the white spaces.
//Ans 6:
var namee = "\t\n Khadim \t\n";
console.log(namee); //name with tab and newline spaces
console.log(namee.trim()); //name without spaces
//Q 7: Number Eight: Write addition, subtraction, multiplication, and division operations that 
//each result in the number 8. Enclose your operations in print statements.
//Ans 7:
console.log(6 + 2); //Adiition
console.log(11 - 3); //Subtraction
console.log(4 * 2); //Multiplication
console.log(40 / 5); //Division
//Q 8: You should create four lines that look like this: console.log(5 + 3)
//Your output should simply be four lines with the number 8 appearing once on each line.
//Ans 8:
console.log(4 + 4); //Adiition
console.log(12 - 4); //Subtraction
console.log(2 * 4); //Multiplication
console.log(32 / 4); //Division  
//Q 9:  Favorite Number: Store your favorite number in a variable. Then, create a message
// revealing your favorite number. Print that message.
//Ans 9:
var fav_number = 24;
console.log("My Favorite Number is : ", fav_number);
//Q 10: Adding Comments: Choose two of the programs you’ve written, and add at least one 
//comment to each. If the programs are straightforward at this point, just add your name and the 
//current date at the top of each program file. Then, write one sentence describing what the program does.
//Ans 10:
//M.Khadim Hussain  6 March 2024
//This is the code for printing the 8 four times in a row
console.log(6 + 2); //Adiition
console.log(11 - 3); //Subtraction
console.log(4 * 2); //Multiplication
console.log(40 / 5); //Division
//This is the code for printing your Favorite Number with string
var favr_number = 24;
console.log("My Favorite Number is : ", favr_number);
//Q 11:  Names: Store the names of a few of your friends in an array called names. Print each 
//              person’s name by accessing each element in the list, one at a time.
//Ans 11:
var names = ["Saleem", "Huzaifa", "Nazia"];
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Q 12: Greetings: Use the array from Exercise 11. Instead of just printing each person’s name, 
//print a message to them. The message should be the same for each person, but personalized with their 
//name.
//Ans 12:
for (var i = 0; i < names.length; i++) {
    console.log("What are you doing ".concat(names[i], " lets learn TypeScript."));
}
//Q 13: Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a 
//car, and make a list that stores several examples. Use your list to print a series of statements about 
//these items, such as “I would like to own a Honda motorcycle.”
//Ans 13:
var fav_transport = ["Vigo", "Bike", "Hiroof", "Civic"];
for (var i = 0; i < fav_transport.length; i++) {
    console.log("I would like to own a ".concat(fav_transport[i]));
}
//another way
fav_transport.forEach(function (fav_transport) {
    console.log("I would like to own a ".concat(fav_transport));
});
//Q 14: Guest List: If you could invite anyone, living or deceased, to dinner, who would you 
//invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your 
//list to print a message to each person, inviting them to dinner.
//Ans 14:
var guest = ["Aslam", "Saif", "Fahad", "Nadeem"];
guest.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", i would like to invite you in my Dinner Party."));
});
//Q 15: Changing Guest List: One of your guests can't make it to the dinner, so you need to 
//send out a new set of invitations with a replacement guest.
//Ans 15:
var unable = "Fahad";
console.log("".concat(unable, " is unable to attend Dinner Party."));
//replacing the guest
var newguest = "Hadi";
guest[guest.indexOf(unable)] = newguest;
guest.forEach(function (guest) {
    console.log("Hello ".concat(guest, ", i would like to invite you in my Dinner Party."));
});
//Q 16: More Guests: You've found a bigger dinner table, so there's room for more guests.
//Ans 16:
var guests = ["Babar", "Noman", "Ayaz", "Zain"];
console.log("I have found a bigger table");
guests.unshift("Mudassir"); //add from top
guests.splice(guests.length / 2, 0, "Hamza"); //add in the middle total/2
//            total element / 2 ,0 element is removed,
//             4/2 = 2, on index 2 "Hamza" will be add
guests.splice(guests.length / 4, 0, "Ghafoor");
//             6/4 = 1.5 = 1, on index 1 "Ghafoor" will be add 
guests.push("Ikram"); //add from bottom
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", would like to invite you in my Dinner Party"));
});
//Q 17: Shrinking Guest List: Unfortunately, your new table won’t arrive in time, and you can 
//             only invite two guests.
//Ans 17:
console.log("Unfortunatly i only invite two people for Dineer party.");
//while loops continous until guests lenght is > 2 and pop one element and print the msg, till length =2
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry ".concat(removedGuest, ", i can't invite you"));
}
//here in guests array only 2 elements/persons is left so they are still invited
guests.forEach(function (guests) {
    console.log("Dear ".concat(guests, ", you're still invited"));
});
//for remove the all elements from the array
guests.splice(0, guests.length);
//     splice(start, deletCount)   from guests 0 to guests whole length
console.log(guests);
//Q 18: Seeing the World: Think of at least five places you’d like to visit.
//Ans 18:
var places = ["Turkey", "Austria", "London", "Germony", "China"];
places.forEach(function (places) {
    console.log("Love to visit ".concat(places));
});
//IN DIFFERENT ORDERS
console.log("Original order:", places);
console.log("Alphabetical order:", __spreadArray([], places, true).sort()); //Ascending order
console.log("Original order:", places);
console.log("Reverse alphabetical order:", __spreadArray([], places, true).sort().reverse()); //Decending order
console.log("Original order:", places);
places.reverse(); //it just reverse the places array
console.log("Reverse of Original:", places);
places.reverse(); //it reverse the last reverse which make the original array
console.log("Reverse of reverse of Original:", places); //2 times reverse make original array
places.sort(); //Array in Ascending order
console.log("Alphabetical order:", places);
places.reverse(); //reverse the current array, so here it just reverse the ascending order
console.log("Reverse of alphabetical order", places); //show descending but its just reverse the ascending 
//ALPHABETICAL ORDER IN VARIABLE 
var alphabeticalOrder = __spreadArray([], places, true).sort();
console.log("I want to visit ".concat(alphabeticalOrder));
//REVERSE ALPHABETICAL ORDER OR DECENDING ORDER IN VARIABLE
var reverseAlphabetical = __spreadArray([], places, true).sort().reverse();
console.log("I want to see ".concat(reverseAlphabetical));
//Q 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message 
//             indicating the number of people you are inviting to dinner.
//Ans 19:
var guest1 = ["Aslam", "Saif", "Fahad", "Nadeem"];
console.log("I am invitig ".concat(guest1.length, " people in the Dinner party."));
//Q 20: Think of something you could store in an array. For example, you could make a list of 
//mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that 
//creates a list containing these items.
//Ans 20:
var cities = ["Karachi", "Islamabad", "Peshawar", "Lahore", "Faislabad"];
//My try
//console.log(`Famous cities of Pakistan are ${cities}`)
//Actual way
console.log("Famous cities of pakistan are ", cities);
//Q 21: Think of something you could store in a TypeScript Object. Write a program that creates 
//             Objects containing these items.
//Ans 21:
var book = {
    title: "THE HOBBIT",
    author: "J.R.R. Tolkien",
    yearpublished: 1937
};
console.log("Book Info: ".concat(book.title, " by ").concat(book.author, ", publishes in ").concat(book.yearpublished));
//another example of typescript object
var myself = {
    namee: "M. Khadim Hussain",
    city: "Karachi",
    age: 23
};
console.log("My name is ".concat(myself.namee, ", i am from ").concat(myself.city, " and i am ").concat(myself.age, " years ago."));
//Q 22: Intentional Error: Try to produce an array index error in one of your programs. Correct
//              the error before finishing.
//Ans 22:
var animals = ["Cat", "Dog", "Cow", "Lion", "Goat", "Horse"];
// Array index              0  ,   1  ,   2  ,    3  ,   4   ,    5 
//calling index 6 which not present in array but just for intentional error
console.log(animals[6]); // output is undefined
//now calling that index which is present in array and resolving the above error
console.log(animals[2]); // output is Cow
//Q 23: Conditional Tests: Write a series of conditional tests. Predict the results of each test.
//Ans 23:
var car = "Vigo";
console.log("Is Car == 'Vigo'? predict True.");
console.log(car == 'Vigo'); //output is True
//if i write the "V" of 'Vigo' in small letter "v" then the output is False
console.log("Is Car == 'Honda'? predict False.");
console.log(car == 'Honda'); // output is false
//Another example
var birthMonth = "July";
console.log("Is Bith Month == 'July'? predict True.");
console.log(birthMonth == 'July'); //output is True
//if i write the "J" of 'July' in small letter "j" then the output is False
console.log(birthMonth == 'july'); // output is false
console.log("Is Birth Month == 'March'? predict False.");
console.log(birthMonth == 'March'); //output is false
//Q 24: More Conditional Tests: Expand your conditional tests to cover a wider range of comparisons.
//Ans 24:
//TESTING EQUALITY WITH STRINGS
console.log("Testing Equality With Strings");
console.log("cat" == "cat"); //True
//console.log("cat" == "Cat");    //False
//Using the lower case function
console.log("Testing With Lower Case");
console.log("LioN".toLowerCase() == "lion"); //True
//Using Upper Case at both sides
console.log("lion".toUpperCase() == "lion".toUpperCase()); //True
//NUMERICAL TEST
console.log("Numerical Test");
console.log(10 > 5); //True
console.log(10 > 20); //False
console.log(7 < 21); //True
console.log(9 < 4); //False
//Testing using "and" and "or" operators
console.log("Test with 'and' and 'or' operators");
//The "&&" "and" operator return "true" when both operands are true, otherwise false
console.log(true && false); //False
//The "||" "or" operator return "true" when at least one of the operands is true, otherwise false
console.log(true || false); //True
//Test whether an item is in a array
var fruitss = ["Apple", "Mango", "Banana", "Cherry"];
console.log("Total Fruits:", fruitss);
console.log("Is 'Mango' in fruitss?");
console.log(fruitss.indexOf("Mango") !== -1); //true
//Test whether an item is not in a array
console.log("Total Fruits:", fruitss);
console.log("Is 'Orange' in fruitss?");
console.log(fruitss.indexOf("Orange") !== -1); //false
//Q 25: Alien Colors #1: Imagine an alien was just shot down in a game. Assign 'green', 'yellow', 
//             or 'red' to a variable called alien_color.
//Ans 25:
var alien_color = "green";
if (alien_color == "green") {
    console.log("You Earned 5 points");
}
if (alien_color == "red") {
    console.log("you miss 5 points"); //no output bcz the condition is false
}
//Q 26: Alien Colors #2: Choose a color for an alien, then write an if-else chain.
//Ans 26:
var alien = "yellow";
if (alien == "yellow") {
    console.log("This alien is in Yellow color");
}
else {
    console.log("your yellow alien is missing");
}
//here the else block will run
var alien1 = "red";
if (alien1 == "green") {
    console.log("This alien is in green color");
}
else {
    console.log("This alien is in another color");
}
//Q 27: Alien Colors #3: Convert your if-else chain to handle three colors: green, yellow, red.
//Ans 27:
//red alien version
var alien_color1 = "red";
if (alien_color1 == "green") {
    console.log("you win 5 points");
}
else if (alien_color1 == "red") {
    console.log("you miss 5 points");
}
else {
    console.log("you win 10 points");
}
//green alien version
var alien_color2 = "green";
if (alien_color2 == "green") {
    console.log("you win 5 points");
}
else if (alien_color2 == "red") {
    console.log("you miss 5 points");
}
else {
    console.log("you win 10 points");
}
//yellow alien version
var alien_color3 = "yellow";
if (alien_color3 == "green") {
    console.log("you win 5 points");
}
else if (alien_color3 == "red") {
    console.log("you miss 5 points");
}
else {
    console.log("you win 10 points");
}
//Q 28: Stages of Life: Determine a person’s life stage with an if-else chain.
//Ans 28:
var personAge = 15;
if (personAge < 18) {
    console.log("You are not elegible for CNIC"); // output 
}
else if (personAge == 18) {
    console.log("You are eligible for CNIC");
}
else if (personAge == 19) {
    console.log("you are eligible but you waste 1 year");
}
else if (personAge == 20) {
    console.log("you are eligible but you waste 2 years");
}
else if (personAge == 21) {
    console.log("you are eligible but you waste 3 years");
}
else {
    console.log("you are late");
}
//Another Example
var person2Age = 23;
if (person2Age < 2) {
    console.log("The person is baby");
}
else if (person2Age < 4) {
    console.log("The person is toddler");
}
else if (person2Age < 13) {
    console.log("The person is kid");
}
else if (person2Age < 20) {
    console.log("The person is teenager");
}
else if (person2Age < 65) {
    console.log("The person is adult"); //output
}
else {
    console.log("The person is elder");
}
//Q 29: Favorite Fruit: Create an array for your favorite fruits and check if certain fruits are
//             included.
//Ans 29:
var myFavFruits = ["Pineapple", "Water Melon", "Lychee", "Pomegranate"];
if (myFavFruits.indexOf("Pineapple") !== -1) {
    console.log("Pineapple is my fav fruit");
}
if (myFavFruits.indexOf("Lychee") !== -1) {
    console.log("Lychee is my fav fruit");
}
if (myFavFruits.indexOf("Water Melon") !== -1) {
    console.log("Water Melon is my fav fruit");
}
if (myFavFruits.indexOf("Pomegranate") !== -1) {
    console.log("Pomegranate is my fav fruit");
}
if (myFavFruits.indexOf("Orange") !== -1) {
    console.log("Orange is not my fav fruit");
}
if (myFavFruits.indexOf("Grapes") !== -1) {
    console.log("Grapes are not my fav fruit");
}
//Q 30: Hello Admin: Greet users differently, especially 'admin'.
//Ans 30:
var userNamess = ["User1", "User2", "User3", "Admin", "User4"];
userNamess.forEach(function (userNamess) {
    if (userNamess == "Admin") {
        console.log("Welcome Dear Admin, would you like to see the status report?");
    }
    else {
        console.log("Hello ".concat(userNamess, ", thnaks for logging in again"));
    }
});
//Q 31: No Users: Ensure your user list isn’t empty.
//Ans 31:
var namesOfUsers = [];
if (namesOfUsers.length == 0) {
    console.log("We need to find some users"); //output
}
else {
    console.log("Welcome ".concat(namesOfUsers));
}
//Q 32: Checking Usernames: Ensure uniqueness in usernames.
//Ans 32:
var currentUsers = ["user1", "admin", "user2", "user3", "user4"];
var newUsers = ["user5", "user6", "admin", "user7", "user8"];
newUsers.forEach(function (newUsers) {
    if (currentUsers.some(function (currentUsers) { return currentUsers.toLowerCase() == newUsers.toLowerCase(); })) {
        console.log("".concat(newUsers, " will need to enter a new username"));
    }
    else {
        console.log("".concat(newUsers, " is available."));
    }
});
//Another Example
console.log("\n Another Example");
var secA = ["ali", "saif", "abid", "atif", "asif"];
var secB = ["sajid", "asif", "jamil", "saif", "nabil"];
secB.forEach(function (secB) {
    if (secA.some(function (secA) { return secA.toLowerCase() === secB.toLowerCase(); })) {
        console.log("".concat(secB, " will need to enter a new username"));
    }
    else {
        console.log("".concat(secB, " is available"));
    }
});
//Q 33: Ordinal Numbers: Display numbers with their ordinal suffixes.
//Ans 33:
var numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numberss.forEach(function (numberss) {
    var suffix = "th";
    if (numberss === 1) {
        suffix = "st";
    }
    else if (numberss === 2) {
        suffix = "nd";
    }
    else if (numberss === 3) {
        suffix = "rd";
    }
    console.log("".concat(numberss).concat(suffix));
});
//Q 34: Pizzas: Share your favorite pizzas and express your love for them.
//Ans 34:
var pizzas = ["Roman", "Sicilian", "Hawaiian", "Mexico"];
pizzas.forEach(function (pizzas) {
    console.log("I really Like ".concat(pizzas, " pizza"));
});
//Q 35: Animals: Highlight animals with a common trait.
//Ans 35:
var animalCommon = ["Cat", "Dog", "Rabbit"];
animalCommon.forEach(function (animalCommon) {
    console.log("".concat(animalCommon, " is a good pet"));
});
//Another Example
console.log("\n Another Example");
var animalCommon1 = ["Cow", "Goat", "Buffalo", "Camel"];
animalCommon1.forEach(function (animalCommon1) {
    console.log("The meat of ".concat(animalCommon1, " is Halal"));
});
//Q 36: T-Shirt: Create a function for customizing t-shirts.
//Ans 36:
function makeShirt(size, messagee) {
    console.log("Making a ".concat(size, " T-Shirt with the message \"").concat(messagee, "\" printed on it."));
}
makeShirt("medium", "Code is life");
//Another Example
console.log("\n Another Example");
function bag(color, size, message) {
    console.log("your ".concat(size, " bag with ").concat(color, " color and \"").concat(message, "\" printed on it, is ready."));
}
bag("Black", "Large", "Code is life");
//Q 37: Large Shirts: Default values in make_shirt().
//Ans 37:
function make_shirt(size, message) {
    if (size === void 0) { size = "Large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("Making a ".concat(size, " t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt(); //Default Large and message
make_shirt("medium"); //Medium size and default message
make_shirt("Small", "I Love coding"); //small size,  custom message
//Another Example
console.log("\n Another Example");
function bag1(color, size, msg) {
    if (color === void 0) { color = "Blue"; }
    if (size === void 0) { size = "Large"; }
    if (msg === void 0) { msg = "My New Bag"; }
    console.log("your ".concat(size, " bag with ").concat(color, " color and \"").concat(msg, "\" printed on it, is ready."));
}
bag1(); //Default color, size and msg
bag1("Black"); //color = Black, default size and msg
bag1("White", "Medium"); //color = White, size = medium and default msg
bag1("Green", "small", "My green bag"); //custom color, size and msg 
//Q 38: Cities: Describing cities with a function.
//Ans 38:
function describeCities(city, country) {
    console.log("".concat(city, " is in ").concat(country, "."));
}
//describeCities("Karachi")    t give error bcz we have another argument "Country" which is not provided.
describeCities("Karachi", "Pakistan");
describeCities("Lahore", "Pakistan");
describeCities("Istanbul", "Turkey");
describeCities("Ankara", "Turkey");
describeCities("Mumbai", "India");
console.log("\n");
//Q 39: City Names: Formatting city-country pairs.
//Ans 39:
function city_country(city, country) {
    console.log("".concat(city, ", ").concat(country));
}
city_country("Karachi", "Pakistan");
city_country("Lahore", "Pakistan");
city_country("Jeddah", "Saudi Arabia");
//Another way
console.log("\n Another Way");
function city_country1(city, country) {
    return "".concat(city, ", ").concat(country);
}
console.log(city_country1("Karachi", "Pakistan"));
console.log(city_country1("Istanbul", "Turkey"));
console.log(city_country1("Mumbai", "India"));
console.log(city_country1("Paris", "France"));
//Q 40: Album: Create objects for music albums.
//Ans 40:
function music_album(artist, title, track) {
    var album = { artist: artist, title: title };
    if (track) {
        album['tracks'] = track;
    }
    return album;
}
console.log(music_album("Artist 1", "The 1st Album", 5));
console.log(music_album("Artist 2", "The 2nd Album", 6));
console.log(music_album("Artist 3", "The 3rd Album", 7));
//Q 41: Magicians: Display magician names from an array.
//Ans 41:
var magicians = ["Taimor", "Mohsin", "Zahid"];
function show_magicians(magicians) {
    magicians.forEach(function (magicians) {
        console.log(magicians);
    });
}
show_magicians(magicians);
//Q 42: Great Magicians: Add "the Great" to magician names.
//Ans 42:
//using the Ans 41 magicians array
function make_great(magicians) {
    magicians.forEach(function (magicians) {
        console.log("".concat(magicians, " the great"));
    });
}
make_great(magicians);
//Another way
console.log("\n Another way");
function great_magi(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " the great";
    }
}
great_magi(magicians); //modifies the original array
show_magicians(magicians);
//Q 43: Unchanged Magicians: Preserve the original magician names while creating a new "great" 
//              list.
//Ans 43:
console.log("\n q43");
var magicians1 = ["Taimor", "Mohsin", "Zahid"];
function theGreat(magicians1) {
    var great_magicians1 = [];
    magicians1.forEach(function (element) {
        great_magicians1.push("".concat(element, ", the great"));
    });
    return great_magicians1;
}
var great_magicians1 = theGreat(magicians1.slice()); //creates a new mmodified array
console.log("Original magicians:");
show_magicians(magicians); //shows original names
console.log("Great Magicians:");
show_magicians(great_magicians1); //shows modified names
//Q 44: Sandwiches: Summarize sandwich orders with varying ingredients.
//Ans 44:
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(','), "."));
}
make_sandwich("ham", "cheese");
make_sandwich("turkey", "lettuce", "tomato");
make_sandwich("avocado", "sprouts", "mustard", "mayo");
//Q 45: Cars: Create detailed car objects with flexible properties
//Ans 45:
function make_car(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    options.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(make_car("Toyota", "Corolla", ["Color", "red"], ["year", 2020]));
console.log(make_car("Ford", "Fiesta", ["Color", "Blue"], ["sunroof", true]));
