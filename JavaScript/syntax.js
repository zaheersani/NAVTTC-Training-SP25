// var x = 10
// console.log(x); // 10

// var str  = "Hello, World!"
// var str2 = 'Hello, World!'

// console.log(typeof str); // string

// var y = 50; console.log(y); // undefined

// if(y !== undefined && typeof y !== 'string') {
//     // console.log(parseInt(y));
//     console.log(`eval of ${y} + ${x} = ${(y+x)}`); // eval of 50 + 10 = 60
// }
// var x = 10, y = 20; // var x = 10; var y = 20;
// var str  = 'my value = ' + x + ' and ' + y;
// var str2 = `my \`value = ${x} and ${y}`;

// console.log(str2);

// var a = ' my username    '; console.log(a.trim().length); // empty string

// var arr = [1, 2, 3, 4, 5];
// console.log(typeof arr); // object
// console.log(arr);

// var obj = { 
//     name: 'John', 
//     age: 30, 
//     male: true, 
//     score: [10,10],
//     address: { 
//         city: 'New York', 
//         state: 'NY' 
//     }
// };
// console.log(typeof obj); // object

// console.log(`score: ${obj.address}`); // score: 10,10

// var x = 10;
for (var i = 0; i < 5; i++) {
    let x = 0;
    x = x + i;
}
console.log(x); // 20