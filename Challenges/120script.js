

function addFirstLast(arr) {
    let num1 = arr[0];
    let num2 = arr[arr.length - 1 ];
    let sum = num1 + num2;
    return sum;
}

console.log(addFirstLast([1,2,3,4,5]));
