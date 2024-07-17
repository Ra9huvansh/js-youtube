// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

//const bigNumber = 34450409540950034n

// Reference(Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]

let myObj = {
    name: "raghu",
    age: 20
}

const myFunction = function(){
    console.log("Hello world")
}

// console.log(typeof scoreValue)
// console.log(typeof myFunction)

// *************************************************************

// Stack(Primitive), Heap(Non Primitive)

let myYoutubename = "hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"

// console.log(myYoutubename)
// console.log(anothername)

let user1 = {
    email: "user@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "hitesh@google.com"

console.log(user1.email)
console.log(user2.email)

