// singleton(from constructor)
// Object.create

// object literals

const mySym =  Symbol("key1")

const jsUser = {
    name: "raghuvansh",
    "full name": "Raghuvansh Rastogi",
    [mySym]: "mykey1",
    age: 20,
    location: "Lucknow",
    email: "raghuvansh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email)
// console.log(jsUser["email"])
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym])

jsUser.email = "raghuvansh@chatgpt.com"

//Object.freeze(jsUser)

jsUser.email = "raghuvansh@microsoft.com"

// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello JS user")
}

jsUser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`)
}

console.log(jsUser.greeting())
console.log(jsUser.greeting2())





