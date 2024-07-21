/*
function with argument
syntax:
function function_name(parameter1, parameter2, .....){
    body of function
}

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

welcome({
    name:'ram',
    phone:'98242342343',
    email: 'ram@gmail.com',
    status:'active'
})  
