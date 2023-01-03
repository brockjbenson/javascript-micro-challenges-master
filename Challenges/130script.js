
let array4 = ['Hi', 'There', 'What', 'is', 'up'];

function getStringFromArray(arr, startIndex) {
    let result = "";
    for (let i = startIndex; i < arr.length; i++) {
      result += arr[i] + " ";
    }
    return result;
  }

  console.log(getStringFromArray(array4, 2));
