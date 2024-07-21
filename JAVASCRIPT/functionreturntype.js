/*
function with return type
syntax:
function function_name(parameter1, parameter2,....){
    return something
}

*/
function welcome(greetingText){
    // console.log("hello "+name+" welcome to vedu")
    return greetingText;
}

var msg = welcome('hi')
console.log(msg, " ram welcome to vedu")
var msg1 = welcome('hello')
console.log(msg1, ' sujan welcome to vedu')

function sum(a, b){
    var result = a + b;
    // return result;
    console.log("sum of two numebr is: ", result)
}
var res = sum(2,4)
console.log("sum of two number is: ", res)
var res1 = sum(4,5)
console.log("sum of 4 and 5 is: ", res1)
// sum(2,4)
// sum(1,3)