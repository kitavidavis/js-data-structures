function jumpSearch(arr, element) {
    const arraySize = arr.length;

    if(!arraySize){
        console.log("Empty array");
        return -1;
    }

    const jumpSize = Math.floor(Math.sqrt(arraySize));

    let blockStart = 0;
    let blockEnd = jumpSize;

    while(element > arr[Math.min(blockEnd, arraySize) - 1]){
        blockStart = blockEnd;
        blockEnd += jumpSize;

        if(blockStart > arraySize) {
            console.log("Element not found");
            return -1;
        }
    }

    let currentIndex = blockStart;
    while(currentIndex < Math.min(blockEnd, arraySize)) {
        if(element === arr[currentIndex]){
            console.log(currentIndex);
            return currentIndex;
        }

        currentIndex += 1;
    }

    console.log(-1);
    return -1;
}

jumpSearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5);