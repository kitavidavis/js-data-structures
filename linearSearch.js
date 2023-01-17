function linearSearch(arr, element) {
    const foundIndices = [];

    arr.forEach((el, index) => {
        if(el === element){
            foundIndices.push(index);
        }
    });

    console.log(foundIndices);
}

linearSearch([1, 2, 3, 2, 3, 2, 3, 4, 5, 1, 2, 5], 2);