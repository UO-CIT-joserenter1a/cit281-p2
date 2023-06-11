/*
	CIT 281 Project 2
	Name: Jose Renteria
*/

// lowercase chars

// helper function to generate random int
const getRandomInteger = function(min, max)
{
	return Math.floor(Math.random() * (max - min) + min);
}

 // empty string to accumulate to
 // random length between 5 (inclusive) and 26 (exclusive)
const returnRandomString = function()
 {
	let emp = "";
	const chars = "abcdefghijklmnopqrstuvwxyz";
	for(let i = 0; i < getRandomInteger(5, 26); i ++) // for loop structure 
	{
		emp += getRandomLetter(); // accumulate to our empty string by generating a random index in our lowercase chars str	
	}
	return emp;
}

// returns a single, random, lowercase letter
const getRandomLetter = function()
{
	const chars = "abcdefghijklmnopqrstuvwxyz";
	let char = chars[getRandomInteger(0, 25)];
	return char;
}

// returns a random length string between inputted lengths
function getRandomString(minLength, maxLength)
{
	let emp = "";
	const chars = "abcdefghijklmnopqrstuvwxyz";
	for(let i = 0; i < getRandomInteger(minLength, maxLength); i ++) // for loop structure 
	{
		emp += getRandomLetter(); // accumulate to our empty string by generating a random index in our lowercase chars str	
	}
	return emp;
}

// will return a string in ascending order, splits str into array of chars, sorts them, and re-concatenates them at the end using join
const getSortedString = function(str)
{
	return str.split('').sort().join('');
}

console.log(returnRandomString());
console.log(getRandomLetter());
console.log(getRandomString(10, 20));
console.log(getSortedString("xpacd"));