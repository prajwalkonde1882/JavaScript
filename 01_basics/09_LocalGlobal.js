function greet(user) // local variable
{
    return `Hello ${user}!!`
}

let user = 'Prajwal'; // global variable
let str = greet(user);
console.log(str);


function greet1(u)
{
    return `Hello ${u}!!`
}

let user1 = 'Prajwal';
let str1 = greet(user1);
console.log(str);


function add(num1,num2, num3 = 9) // num3 is default parameter
{
    return num1 + num2 + num3
}

let result = add(5,6)
console.log(result)