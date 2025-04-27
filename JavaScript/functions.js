function myFun() { return "Hello World!"; }
function myFun() { return "Getting arguments: " + arguments.length; }

// console.log(myFun(5, 10));

function sum(f1 = 0, f2 = 0, f3 = 0, ...nums) {
    var total = f1 + f2 + f3;
    console.log(`Num of Rest Params: ${nums.length}`); // 2
    for (var i = 0; i < nums.length; i++) {
        total += nums[i];
    }
    return total;
}
console.log(sum(1, 1, 1, 1));
