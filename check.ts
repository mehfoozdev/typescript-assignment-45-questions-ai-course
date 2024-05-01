// // const myName : string = "mehFooz aLI aaaaa"
// // // console.log(myName.toLowerCase())          //for small letters
// // // console.log(myName.toUpperCase())          //for big/capital letters
// // console.log(myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase()) 
// // console.log(myName.charAt(0).toUpperCase())
// // console.log(myName.slice(0,5).toUpperCase())   



// //Q 6: Stripping Names: Store a person’s name, and include some whitespace characters at the 
// //beginning and end of the name. Use "\t" (tab) and "\n" (new line) at least once. Print the name once,
// //so the whitespace around the name is displayed. Then print the name after stripping the white spaces.

// // let myName : string = "\t\n Mehfooz \t\n"

// // console.log(myName)            //name with tab and newline spaces
// // console.log(myName.trim())       //name without spaces


// //Q 7: Number Eight: Write addition, subtraction, multiplication, and division operations that 
// //each result in the number 8. Enclose your operations in print statements.


// // let friend_names:string[] = ["Alaudin", "wajid", "Hassan"]
// // console.log(friend_names[0], friend_names[1], friend_names[2])

// // for (let i=0; i<friend_names.length; i++){
// //     console.log(friend_names[i])

// //     console.log(`What are you doing '${friend_names[i]}' lets learn TypeScript course for better future.`)
// // }


// let person_invite : string[] = ["Alaudin", "Wajid", "Ayan", "Rauf"]
// for (let i=0; i < person_invite.length; i++) {
//     console.log(`Hey ${person_invite[i]}, come in my party`)
// }

// // let unablea:string = person_invite.indexOf[1]
// // console.log('unable ; ', unablea)

// //replacing the guest
// let newguesta:string = "Hammad"
// person_invite[person_invite.indexOf('Wajid')] = newguesta
// console.log('-----------------------------------------------')

// for (let i=0; i < person_invite.length; i++) {
//     console.log(`Hey ${person_invite[i]}, come in my party`)
// }











//Ans 18:
// let placesa : string[] = ["Belgium", "Germany", "Australia", "Luxemburg", "Turkey"]

// placesa.forEach(placesa => {
//     console.log(`Love to visit ${placesa}`)
// })

// // //IN DIFFERENT ORDERS
// console.log("Original order:",placesa)
// console.log("Alphabetical order:",[...placesa].sort())    //Ascending order

// console.log("Original order:",placesa)
// console.log("Reverse alphabetical order:",[...placesa].reverse())   //Decending order

// console.log("Original order:", places)

// places.reverse()                  //it just reverse the places array
// console.log("Reverse of Original:",places)

// places.reverse()                 //it reverse the last reverse which make the original array
// console.log("Reverse of reverse of Original:",places)   //2 times reverse make original array

// places.sort()                   //Array in Ascending order
// console.log("Alphabetical order:",places)

// places.reverse()               //reverse the current array, so here it just reverse the ascending order
// console.log("Reverse of alphabetical order",places)   //show descending but its just reverse the ascending 

// //ALPHABETICAL ORDER IN VARIABLE 
// let alphabeticalOrder = [...places].sort()
// console.log(`I want to visit ${alphabeticalOrder}`)

// //REVERSE ALPHABETICAL ORDER OR DECENDING ORDER IN VARIABLE
// let reverseAlphabetical = [...places].sort().reverse()
// console.log(`I want to see ${reverseAlphabetical}`)         



//another example of typescript object
// let myselfa:{namee:string; city:string; age:number} =
// {
//     namee : "Mehfooz Ali",
//     city : "Karachi",
//     age : 23.5
// }
// console.log(`My name is ${myselfa.namee}, i am from ${myselfa.city} and i am ${myselfa.age} years old.`)


//Test whether an item is in a array
// let fruitssa:string[] = ["Apple", "Mango", "Banana", "Cherry"];
// console.log("Total Fruits:", fruitssa);

// console.log("Is 'Mango' in fruitss?");
// console.log(fruitssa.indexOf(1.1));      //true


//Another Example
// console.log("\n Another Example");
// let secA : string[] = ["ali", "saif", "abid", "atif", "asif"];
// let secB : string[] = ["sajid", "asif", "jamil", "saif", "nabil"];
// secB.forEach(secB => {
//     if (secA.some(secA => secA.toLowerCase() === secB.toLowerCase())) {
//         console.log(`${secB} will need to enter a new username`);
//     }
//     else {
//         console.log(`${secB} is available`);
//     }
// });



// let numberss:number[] = [1,2,3,4,5,6,7,8,9];
// numberss.forEach(numberss => {
//     let suffix:string = "th";
//     if (numberss === 1) {
//         suffix = "st";
//     }
//     else if (numberss === 2) {
//         suffix = "nd";
//     }
//     else if (numberss === 3) {
//         suffix = "rd";
//     }
//     console.log(`${numberss}${suffix}`);
// });



// function make_shirt(size:string = "Large", message:string = "Typescript") {
//     console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
// }
// make_shirt();          //Default Large and message
// make_shirt("medium")   //Medium size and default message
// make_shirt("Small", "I Love coding")  //small size,  custom message



// function music_album(artist:string, title:string, track:number) {
//     let album = {artist, title};
//     if (track) {
//         album['track'] = track;
//     }
//     return album;
// }
// console.log(music_album("Artist 1", "The 1st Album", 5));
// console.log(music_album("Artist 2", "The 2nd Album", 6));
// console.log(music_album("Artist 3", "The 3rd Album", 7));



function make_car(manufacturer:string, model:string, ...options:[string, any][]): object {
    let car = {manufacturer, model};
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(make_car("Toyota", "Corolla", ["Color", "red"], ["year", 2020]));
console.log(make_car("Ford","Fiesta", ["Color", "Blue"], ["sunroof", true]));