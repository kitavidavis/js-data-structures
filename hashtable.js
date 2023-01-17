class HashTable {
    constructor(){
        this.table = new Array(127);
        this.size = 0;
    }

    /**
     * 
     * @param {*} key 
     * @returns number
     */
    _hash(key) {
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash += key.charCodeAt(i);
        }

        return hash % this.table.length;
    }

    /**
     * 
     * @param {*} key 
     * @param {*} value 
     */
    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value];
        this.size++;
    }

    /**
     * 
     * @param {*} key 
     * @returns string
     */
    get(key) {
        const index = this._hash(key);
        return this.table[index];
    }

    /**
     * 
     * @param {*} key 
     * @returns boolean
     */
    remove(key) {
        const index = this._hash(key);

        if(this.table[index] && this.table[index].length) {
            this.table[index] = undefined;
            this.size--;
            return true;
        } else {
            return false;
        }
    }
}

const hashtable = new HashTable();
hashtable.set("canada", 300);
hashtable.set("france", 100);
hashtable.set("Spain", 200);

console.log(hashtable.get("canada"));