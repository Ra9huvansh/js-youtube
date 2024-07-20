// Dates

let myDate = new Date()
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleDateString())
// console.log(myDate.toLocaleString())

// console.log(typeof myDate)

let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
console.log(Math.floor(myTimeStamp/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth())


newDate.toLocaleString('default', {
    weekday: "long"
})
