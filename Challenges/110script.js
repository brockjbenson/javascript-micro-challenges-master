function condNum(num1, num2) {
    if (num1 > num2) {
        return "The first number was bigger!";
    } else if (num1 === num2) {
         return "The numbers are the same!";
    } else {
        return "The second number was bigger!"
    }
}

console.log(condNum(2,5));