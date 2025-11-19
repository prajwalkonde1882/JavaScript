let i = 10
for ( i = 0; i< 5; i++)
{
    console.log('Hello', i);

    for(let j=0; j<2; j++)
        console.log('Inner loop', j);
}


for(let k = 5; k<=100; k++)
{
    if(k%3 ===0)
        console.log(k);
}