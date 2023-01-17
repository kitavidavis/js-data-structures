function Factorial(){
    this.findFactorial = (n) => {
        let sum = 0;

        for(let i=0; i<n; i++){
            sum = sum + (n * i);
        }

        console.log(sum);
    }
}

const factorial = new Factorial();
factorial.findFactorial(5);