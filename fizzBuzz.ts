function fizzBuzz(num: number): any{
    if(num % 3 == 0 && num % 5 == 0){
        return "Fizz-Buzz!"
    }
    else if(num % 3 == 0){
       return "Fizz!"
    }
    else if(num % 5 == 0){
       return "Buzz!"
    }
    else{
        return num;
    }
}
console.log(fizzBuzz(12))