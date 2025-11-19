// Object literal

let alien = {
    name: "Prajwal",
    tech: "JS",
    laptop : {
        cpu : 'i7',
        ram : '16GB',
        brand1 : 'HP'
    }
}

console.log(alien.name);
console.log(alien['tech']);

// console.log(alien.laptop.brand1?.lenght);

delete alien.laptop;

//  for in loop

for (let key in alien)
{
    console.log(key, alien[key]);
}

// for of loop

for (let key of Object.keys(alien))
{
    console.log(key, alien[key]);
}

for (let value of Object.values(alien))
{
    console.log(value);
}

for (let [key, value] of Object.entries(alien))
{
    console.log(key, value);
}
