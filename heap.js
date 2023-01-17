function BinaryHeap(){
    let list = [];

    //heapify
    this.maxHeapify = (arr, n, i) => {
        let largest = i;
        let l = 2 * i + 1;  //left child index
        let r = 2 * i + 2 //right child index

        //if left child is smaller than root
        if(l < n && arr[l] > arr[largest]) {
            largest = l;
        }

        // if right child is smaller than smallest so far
        if(r < n && arr[r] > arr[largest]){
            largest = r;
        }

        //if smallest is not root
        if(largest != i) {
            let temp = arr[i];
            arr[i] = arr[largest]
            arr[largest] = temp

            // Recursively heapify the affected sub-tree
            this.maxHeapify(arr, n, largest)
        }
    }

    this.insert = (num) => {
        const size = list.length;

        if(size === 0) {
            list.push(num);
        } else {
            list.push(num);

            //heapify
            for(let i= parseInt(list.length / 2 - 1); i >= 0; i--){
                this.maxHeapify(list, list.length, i);
            }
        }
    }

    this.delete = (num) => {
        const size = list.length;

        // get the index of the number to be removed
        let i;
        for(i = 0; i< size; i++){
            if(list[i] === num) {
                break;
            }
        }

        //swap the number with last element
        [list[i], list[size - 1]] = [list[size - 1], list[i]];

        // Remove the last element
        list.splice(size - 1);

        //heapify the list again
        for(let i= parseInt(list.length / 2 - 1); i >= 0; i--) {
            this.maxHeapify(list, list.length, i);
        }
    }

    // Return max value
    this.findMax = () => list[0];

    //Remove max value
    this.deleteMax = () => {
        this.delete(list[0]);
    }

    //Remove and return max value
    this.extractMax = () => {
        const max = list[0];
        this.delete(max);
        return max;
    }

    // Size
    this.size = () => list.length;

    // IsEmpty
    this.isEmpty = () => list.length === 0;

    //Return head
    this.getList = () => list;
}

const heap = new BinaryHeap();
heap.insert(3);
heap.insert(4);
heap.insert(9);
heap.insert(5);
heap.insert(2);

console.log(heap.getList());

heap.delete(9);
console.log(heap.getList());

heap.insert(7);
console.log(heap.getList());
