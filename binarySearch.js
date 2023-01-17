function binarySearch(sortedArray, seekElement) {
    let startIndex = 0;
    let endIndex = sortedArray.length - 1;

    while(startIndex <= endIndex) {
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
        if(sortedArray[middleIndex] === seekElement) {
            return middleIndex;
        }

        if(sortedArray[middleIndex] < seekElement){
            startIndex = middleIndex + 1
        } else {
            endIndex = middleIndex - 1;
        }
    }

    return -1;
}

binarySearch([1, 2, 3, 4, 5, 6, 7], 3);