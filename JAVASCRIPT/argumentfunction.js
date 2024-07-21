/*
function with argument
syntax:
function function_name(parameter1, parameter2, .....){
    body of function
}

function_name(argument1, argument2,....)

*/
// function welcome(name, location) {
//     // name is parameter
//     console.log("hi " + name + " welcome to " + location)
// }
// // function call
// welcome(null, '9823424234')
// // ram is argument
// welcome("shyam", "animax")
// welcome("imnika", "lalitpur")
// welcome("rejina", 'ktm')
// welcome("hari", 'pkr')

function welcome(details) {
    console.log("what comes in details: ", details)
    console.log("hi "+ details.name + " welcome to "+ details.address)
}
var details = {
    name:'ram',
    phone:'98242342343',
    email: 'ram@gmail.com',
    status:'active'
}

welcome(details)  
function welcome(name, address) {
    // name is parameter
    console.log("hi "+name+" welcome to "+address+"!!!")
}

// function call
welcome("ram", "vedu")
welcome("shyam", 'ktm')
welcome("sita", 'lalitpur')