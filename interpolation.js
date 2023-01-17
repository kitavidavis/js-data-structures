function interpolate(arr, x) {
    let leftIndex = 0;
    let rightIndex = arr.length - 1;

    while(leftIndex <= rightIndex) {
        const rangeDelta = arr[rightIndex] - arr[leftIndex];
        const indexDelta = rightIndex - leftIndex;
        const valueDelta = x  - arr[leftIndex];

        if(valueDelta < 0) {
            console.log(-1);
            return -1
        }

        if(!rangeDelta) {
            console.log(arr[leftIndex] === x ? leftIndex : -1);
            return arr[leftIndex] === x ? leftIndex : -1
        }

        const middleIndex = leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);

        if(arr[middleIndex] === x) {
            console.log(middleIndex);
            return middleIndex;
        }

        if(arr[middleIndex] < x) {
            leftIndex = middleIndex + 1;
        } else {
            rightIndex = middleIndex - 1;
        }
    }

    console.log(-1);
    return -1;
}

interpolate([1, 2, 3, 4, 5, 6, 7, 8], 4);