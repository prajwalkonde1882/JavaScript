let laptop = {
    brand: 'Dell',
    cpu: 'i7',
    ram: '16GB',

    getConfig: function() {
        console.log(this.cpu); // 'this' refers to the current object 'laptop'
    }
}

laptop.getConfig();

// this refers to the current object in methods

// when their is 2 objects with same method then 'this' is used to differentiate between them

let laptop1 = {
    brand: 'HP',
    cpu: 'i5',
    ram: '8GB',
    
    getConfig: function() {
        console.log(this.cpu); // 'this' refers to the current object 'laptop1'
    }
}
laptop1.getConfig();

// when function is called alone then 'this' refers to global object (window in browsers, global in nodejs)


function getfastlaptop(laptop, laptop1)
{
    if (laptop.cpu > laptop1.cpu)
        console.log(laptop1);
    else
        console.log(laptop);
}

getfastlaptop(laptop, laptop1);