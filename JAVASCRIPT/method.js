// method
// js inbuilt function
// Number()
// prompt()
// typeof()

function hi() {
    console.log("hi")
}

// hi()

// string
var text = "Random"
// console.log(text.toUpperCase())
// console.log(text.toLowerCase())
var fruits = "mango, kiwi, papaya, strawberry"
// string to array
// console.log(fruits.split(","))

// number
var n = 200.23523
// console.log(n.toFixed(2))
// console.log(n.toFixed(0))

// array
var fruits = ['mango', 'papaya', 'kiwi']
// console.log(fruits.length)
// console.log(fruits[0])
// console.log(fruits.indexOf('mango'))
// console.log(fruits.indexOf('kiwis'))
// console.log(fruits.indexOf('kiwiss'))
// fruits.push("orange")
// fruits.unshift("strawberry")
// fruits.pop()
// fruits.shift()
// console.log(fruits)

// array loop
/*
1. filter
2. map
3. reduce
4. find
5. some
6. every
*/

// object
var details = {
    name: 'sujal',
    address: "vedu",
    contact: "9822342323",
    email: "sujal@gmail.com"
}
// console.log(Object.keys(details))
// console.log(Object.values(details))

// loop
// for, while, do while
// for in
for(var item in details){
    // console.log(item)
    console.log(details[item])
}
