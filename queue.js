class Queue{
    constructor(){
        this.items = [];
    }

    enqueue(item){
        this.items.push(item);
    }

    dequeue(){
        if(this.isEmpty()){
            return "Underflow";
        }

        return this.items.shift();
    }

    front(){
        if(this.isEmpty()){
            return "No elements in queue";
        }

        return this.items[0];
    }

    isEmpty(){
        return this.items.length === 0;
    }

    printQueue(){
        for(var i=0; i<this.items.length; i++){
            console.log(this.items[i]);
        }
    }
}

function generatePrintBinary(n){
    var q = new Queue();

    q.enqueue("1");

    while(n-- > 0){
        var s1 = q.front();
        q.dequeue();
        console.log(s1);

        var s2 = s1;

        q.enqueue(s1 + "0");

        q.enqueue(s2 + "1");
    }
}

generatePrintBinary(1000)