function greet()
{
    return "Hello World"
}

let str = greet();
console.log(str);


function greet(user1)
{
    return `Hello ${user1}!!`
}

let user1 = 'Prajwal';
let str1 = greet(user1);
console.log(str1);


// function expression

let add = function(num1, num2)
{
    return num1 + num2;
}

let result = add(5,6)
console.log(result)