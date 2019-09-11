
/*Write the command to remove "Vinny" from the array.*/ 
var pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']; 

pets.splice(5,1);

console.log(pets);

/*Write the command to remove "Marty" from the array.*/ 

pets.splice(3,1);

console.log(pets);

/* Write the command to add "Nancy" to the front of the array. */ 

var newLength = pets.unshift("Nancy");

console.log(pets);

/* Write the command to add your name to the end of the array. */ 

var newLength = pets.push("Adam");

console.log(pets);

/* Write the command that gives the indexOf where "Riley" is located. */ 

console.log(pets.indexOf("Riley"));

/*Write the command that gives the indexOf where "Cindy" is located (this should return-1).*/ 

console.log(pets.indexOf("Cindy"));

/*Create a new variable called "withMarmaduke" and set it equal to the original array concatenated with the string "Marmaduke". Output this new array variable to the console.*/

var withMarmaduke = pets.concat("Marmaduke");

console.log(withMarmaduke);

/* OPTION 2 */

/*Use the .shift() array method and show the removed array item in a console.log statement.*/
var rem = pets.shift();

console.log(rem);

/* Using the .unshift() array method, add the name 'Barney' to the array. */ 

pets.unshift("Barney");

console.log(pets);

/* Using an array method, add this array to the end of the original pet name array to make a new array named allPets.
['Ted','Fred','Jed','Ned','Ed','Zed'] . Display the new array allPets. Use the allPets array for the rest of this exercise. */ 

var allPets = pets.push("Ted","Fred","Jed","Ned","Ed","Zed");

console.log(allPets);

/* Use the .shift() array method again and show the array item that was removed this time in a console.log statement.*/
var rem = pets.shift();

console.log(rem);

/* Using the array method .join(), create a string variable named 'pets' that holds all of the pet names, separated by commas. */ 
var pet = pets.join();

console.log(pet);

/* Using the .unshift() array method, add the name 'Agnes' to the array. */
pets.unshift("Agnes");

console.log(pets);
