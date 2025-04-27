function myFun() { return "Hello World!"; }
function myFun() { return "Getting arguments: " + arguments.length; }

// console.log(myFun(5, 10));

const myfun = () => "Hello World!";
myfun();

var res = {};
res['sum'] = 6;
res['mult'] = 7;
Object.keys(res).forEach((key) => {
    console.log(key); // sum, mult
});
Object.values(res).forEach((value) => {
    console.log(value); // 6, 7
});
console.log(res['sum']); // 6
console.log(typeof res); // { sum: 6, mult: 7 }

const sum = (...nums) => {
    var total = 0;
    console.log(`Num of Rest Params: ${nums.length}`); // 2
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
console.log(sum(1, 1, 1, 1));
