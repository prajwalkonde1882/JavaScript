let greet = function(user)
{
    console.log('hello ' + user);
    return 1;

}

console.log(greet('navin'));

// Arrow function

let add = (num1, num2) => {
    return num1 + num2;
}

let result = add(5,6)
console.log(result)

// if there is only one parameter

let square = num => {
    return num * num;
}

let sqresult = square(5)
console.log(sqresult)

// if there is only one statement in the function body

let multiply = (num1, num2) => num1 * num2;

let mulresult = multiply(5,6)
console.log(mulresult)

// if there is no parameter

let greet1 = () => console.log('Hello World!!');

greet1();