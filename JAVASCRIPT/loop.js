// console.log("run using node js")
// console.log("run js file using command")
// check node version/existence: 
// node -v or node --version
// command to run js file
// npm file_name
/*
loop:
types:
1. for
syntax:
for(initialization;condition;increment/decrement){
    body of for loop
}

1. wap(write a program) to print a number from 1 to 10
initialization
i=1

condition:
i<11 or i<=10

increment
i++

for (i = 1; i < 11; i++) {
     console.log(i)
}

2. wap to print a number from 10 to 1
initialization:
i=10

condition:
i >=1
i > 0

decrement
i--

for(i=10;i>0;i--){
    console.log(i)
}

3. wap to print the multiplication table of a number
1 to 10
5

initialization:i=1
condtion:i<=10
increment: i++
5 * i

4. wap to print even number from 1 to 50
for(i=1;i<=50;i++){
    if(i%=2==0){
        console.log(i)
    }
}
5. wap to print odd number from 1 to 50
6. wap to print the sum of number from 1 to 10
var sum = 0
for(i=1;i<=10;i++){
    sum += i;
    sum = sum + i;
}
print(sum)

2. while
syntax:
initialization
while(condition){
    body of while
    increment/decrement
}

3. do while
syntax:
initialization
do{
    body of do while
    increment/decrement
}while(condition)

*/
// var n = 6
// for(i=1;i<=10;i++){
//     // i = 1 to 10
//     // console.log(i*n)
//     console.log(n+" x "+i+" = "+n*i)
// }
// 
var i = 1
// while(i<=10){
//     console.log(i)
//     i++
// }
do {
    console.log(i)
    i++
} while (i <= 10)

// for loop
// count specific

// while, do while loop
// condition specific

a = 1
while(i<=10){
    if(i==5){
        console.log(i)
        break;
    }
}