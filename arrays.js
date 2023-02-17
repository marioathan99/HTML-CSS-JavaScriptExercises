//1. Please define a variable called lottoNumbers and set it equal to an array containing any 6 numbers
let lottoNumbers = [9,7,8,5,3,4]
console.log(lottoNumbers)
//2. , I misspelled the 2nd name in the leaderboard array.  I meant to write "Luna" instead of "Lua".  Please update it to "Luna" (without changing line 1)
//Bellatrix has fallen off the leaderboard and has been replaced by Draco! Please update the last element of the array so that it holds "Draco" instead of "Bellatrix" (once again, please do this without changing line 1)
const leaderboard = ['Harry', 'Lua', 'Hermione', 'Bellatrix'];
// YOUR CODE BELOW HERE:
leaderboard[1] = 'Luna'
leaderboard[3] = 'Draco'
console.log(leaderboard)
//3. Push/Pop/Shift/Unshift Practice:
//a.Remove the first element, "The Moon", from the planets array.  The moon is not a planet!
//b.Add in "Saturn" at the very end of the planets array
//c.Add "Mercury" as the first element in the planets array.
const planets = ['The Moon','Venus', 'Earth', 'Mars', 'Jupiter'];
planets.shift()
planets.push('Saturn')
planets.unshift('Mercury')
console.log(planets)
//4. Nested arrays:
//Provided with an array called airplaneSeats, which represents the rows of seats on a flight.  
//Our friend Hugo is looking to book a seat on our flight. Fortunately, there is one middle seat available (it's set to null currently).  
//Please update the array element that is currently null, to instead be "Hugo". 
const airplaneSeats = [
    ['Ruth', 'Anthony', 'Stevie'],
    ['Amelia', 'Pedro', 'Maya'],
    ['Xavier', 'Ananya', 'Luis'],
    ['Luke', null, 'Deniz'],
    ['Rin', 'Sakura', 'Francisco']
];

// Solution:

airplaneSeats[3].splice(1,1,'Hugo');
