class FibonacciNumber{

    printNumbers(num){
        let num1 = 0;
        let num2 = 1;
        let sum;
        for(let i=0; i<num; i++){
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }

        console.log(num2);
    }
}

const fibonacci = new FibonacciNumber();
fibonacci.printNumbers(5);