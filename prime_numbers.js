// with hardy Ramanujan
function PrimeNumbers(){
    this.printPrimeNumbers = (n) => {
        //clone n to avoid function arguments override
        let nn = n;

        const factors = [];

        // Running the loop till sqrt(n) instead of n to optimize time complexity from O(n) to O(sqrt(n))
        for(let factor = 2; factor <= Math.sqrt(nn); factor += 1) {
            // check that the factor divides n without a reminder.
            while(nn % factor === 0){
                // overiding the value of n.
                nn /= factor;

                factors.push(factor);
            }
        }

        if(nn !== 1) {
            factors.push(nn);
        }

        console.log(factors);
    }

    this.hardyRamanujan = (n) => {
        console.log(Math.log(Math.log(n)));
    }
}

let prime = new PrimeNumbers();
prime.printPrimeNumbers(10);
prime.hardyRamanujan(10);