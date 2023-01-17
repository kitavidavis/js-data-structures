function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;

    while(left < right) {
        if(string[left] !== string[right]){
            console.log("false")
        }

        left += 1;
        right -= 1;
    }

    console.log("true");
}

isPalindrome("dodo");
isPalindrome("racecar");