// construction of a simple linked list with three nodes

var head;

class Node {
    constructor(element)
    {
        this.element = element;
        this.next = null;
    }
}

/**
 * Time complexity
 * worst case
 * search = O(n)
 * insert = O(1)
 * deletion = O(I)
 * 
 * Avarage case
 * Search = O(n)
 * Insert = O(1)
 * Deletion = O(1)
 * 
 * Auxiliary Space = O(N)
 */


// example 2
class LinkedList {
    constructor()
    {
        this.head = null;
        this.size = 0;
    }

    add(element){
        var node = new Node(element);

        var current;

        if(this.head == null){
            this.head = node;
        } else {
            current = this.head;

            while(current.next){
                current = current.next
            }

            current.next = node;
        }

        this.size++;
    }

    insertAt(element, index){
        if(index < 0 || index > this.size){
            return console.log("Please enter a valid index")
        } else {
            var node = new Node(element);
            var curr, prev;

            curr = this.head;

            if(index == 0){
                node.next = this.head;
                this.head = node;
            } else {
                curr = this.head;

                var it = 0;

                while(it < index){
                    it++;
                    prev = curr;
                    curr = curr.next
                }

                node.next = curr;
                prev.next = node;
            }

            this.size++;
        }
    }

    removeFrom(index){
        if(index < 0 || index >= this.size){
            return console.log("Please enter a valid index");
        } else {
            var curr, prev, it = 0;
            curr = this.head;
            prev = curr;

            if(index === 0) {
                this.head = curr.next;
            } else {
                while(it < index) {
                    it++;
                    prev = curr;
                    curr = curr.next;
                }

                prev.next = curr.next;
            }

            this.size--;

            return curr.element;
        }
    }

    indexOf(element){
        var count = 0;
        var current = this.head;

        while(current !== null) {
            if(current.element === element){
                return count;
            }

            count++;
            current = current.next;
        }

        return -1;
    }

    isEmpty(){
        return this.size === 0;
    }

    printList(){
        var curr = this.head;
        while(curr) {
            console.log(curr.element);
            curr = curr.next;
        }

    }
}

var ll = new LinkedList();

console.log(ll.indexOf(20));
