class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor(value) {
        const newNode = new Node(value);
        this.first = newNode;
        this.last = newNode;
        this.length = 1;
    }

    enQueue(value) {
        const newNode = new Node(value);
        if (!this.first) {
            this.last = newNode;
        } else {
            newNode.next = this.first;
        }
        this.first = newNode;
        this.length++;
        return this;
    }
}