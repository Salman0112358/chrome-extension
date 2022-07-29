
const credits = 12;
if (credits > 0) {
    console.log("Lets's Play")
} else {
    console.log("Sorry you have no credits")
}

//truthy
//falsy

// false
// 0
// ""
// null  -> how you as a developer signalize emptiness
// undefined -> how JavaScript signalizes emptiness 
// NaN

let currentViewers = null;

currentViewers = ["jane", "nick"]

currentViewers = []

if (currentViewers){
    //dom something
    console.log("we have viewers")
}

// let currentViewers

//console.log(currentViewers)

// would return undefined 

let trueOrFalse = Boolean("Hello")
console.log(trueOrFalse)

console.log(  Boolean("")   ) // returns false
console.log(  Boolean("0")  ) // returns true
console.log(  Boolean(100)  ) // returns true 
console.log(  Boolean(null) ) // returns false
console.log(  Boolean([0])  ) // returns true 
console.log(  Boolean(-0)   ) // returns false