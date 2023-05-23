//object dest 1 = numPlanets = 8 and yearNeptuneDiscovered = 1846

//object dest 2 this would be... yearNeptuneDiscovered: 1846,
  //yearMarsDiscovered: 1659

//object dest 3 = 'Your name is Alejandro and you like purple'
//'Your name is Melissa and you like green'
//'Your name is undefined and you like green'

//array destructure 1 = Maya
//Marisa
//Chi

//array dest 2
//Raindrops on roses
//whiskers on kittens
//["Bright copper kettles","warm woolen mittens","Brown paper packages tied up with strings"]

//array destructuring 3
//numbers = [10, 30, 20];

//ES2015 Obj Destructuring
const obj = {
    numbers: {
        a = 1, 
        b = 2

    }
};

//ES5 One-Line Array Swap
let arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//raceResults()
function raceResults(arr) {
    first,
    second,
    third,
    ...rest
}

const {first, second, third, ...rest} = raceResults;

const raceResults = (arr) => {[first, second, third, ...rest]};
    

