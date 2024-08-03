// Primitive 

// 7 types : String, Number, bool, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 343764836473648734678n


// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["Shaktiman", "naagraj", "doga"];
let myObj = {
    name: "Naman",
    age: 24,
}

const myFunction = function(){
    console.log("Hello World");    
}

console.log(typeof myFunction);



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive), Heap (Non-Primitive)

let myYoutubename = "NGTech"

let anothername = myYoutubename
anothername = "NGVolgs"

console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "naman@google.com"

console.log(userOne.email);
console.log(userTwo.email);


