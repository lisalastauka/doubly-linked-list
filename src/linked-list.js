const Node = require('./node');

class LinkedList {
    constructor() {

        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data), prev = this._tail;
        if (this.length){
            this._tail = node;
            this._tail.prev = prev;
            this._tail.prev.next = this._tail;

        }
        else {
            this._head = node;
            this._tail = node;
        }
        this.length++;
        return this;
    }

    head() {
        return this._head ? this._head.data : null;
    }

    tail() {
        return this._tail ? this._tail.data : null;
    }

    at(index) {
        let node = this._head, i = 0;
        while (node) {
            if (index === i) {
                return node.data
            }
            node = node.next;
            i++;
        }
    }

    insertAt(index, data) {
        let node = this._head, i = 0;
        while (node) {
            if (index === i) {
                let temp = node;

                node = {
                    data : data,
                    prev : temp.prev,
                    next : temp
                };

                node.prev.next = node;
                node.next.prev = node;
                return node.data;
            }
            node = node.next;
            i++;
        }
        return this;
    }

    isEmpty() { return this._head ? false : true;}

    clear() {
        this.length = 0;
        this._tail = null;
        this._head = null;
        return this;
    }

    deleteAt(index) {
        let node = this._head, i = 0;
        while (node) {
            if (index === i) {
                node.next ? node.prev.next = node.next : null;
                node.prev ? node.next.prev = node.prev : null;
                node = null;
                this.length--;
                return this;
            }
            node = node.next;
            i++;
        }
        return this;
    }

    reverse() {
        if (this._head){
            let temp = this._tail;
            this._tail = this._head;
            this._head = temp;

            let node = this._head;
            for (let i = 0; i < this.length ; i++) {
                var prev = node.prev ? node.prev : null;
                node.next ? node.prev = node.next : null;
                node.next = prev;
                node = node.next;
            }
        }
        return this;
    }

    indexOf(data) {
        let node = this._head, i = 0;
        while (node) {
            if (node.data === data) {
                return i;}
            node = node.next;
            i++;
        }
        return -1;
    }
}

module.exports = LinkedList;
