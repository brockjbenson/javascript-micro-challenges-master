let array8 = [[34,5,6],[1,2,3],[4,7,6,8]];
const findNestedSum = (arr) => {
    let sum = 0;
    for(let i = 0; i < arr.length; i++){
       for (let x = 0 ;x < arr[i].length; x++) {
         sum += arr[i][x];
       }
    }
    return sum;
 }
 console.log(findNestedSum(array8));