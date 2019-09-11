/*Write the command to remove "Vinny" from the array.*/ 
var pets = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']; 

var pos = 5, n = 1;
var removedItems = pets.splice(pos,n);

console.log(pets);

/*Write the command to remove "Marty" from the array.*/ 

var pos = 3, n = 1;
var removedItems = pets.splice(pos,n) 

console.log(pets)

/* Write the command to add "Nancy" to the front of the array. */ 

var newLength = pets.unshift('Nancy')

console.log(pets);

/* Write the command to add your name to the end of the array. */ 

var newLength = pets.push('Adam') 

console.log(pets);

/* Write the command that gives the indexOf where "Riley" is located. */ 

console.log(pets.indexOf('Riley'));

/*Write the command that gives the indexOf where "Cindy" is located (this should return-1).*/ 

console.log(pets.indexOf('Cindy'));

/*Create a new variable called "withMarmaduke" and set it equal to the original array concatenated with the string "Marmaduke". Output this new array variable to the console.*/

