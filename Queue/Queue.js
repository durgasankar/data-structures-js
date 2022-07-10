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
        if (this.length === 0) {
            this.last = newNode;
            this.first = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;
    }

    print() {
        let values = {};
        let tempFirst = this.first;
        let index = 0;
        while (tempFirst) {
            values[index] = tempFirst.value;
            index++;
            tempFirst = tempFirst.next;
        }
        return values;
    }

    deQueue() {
        if (this.length === 0) return undefined;
        let tempFirst = this.first;
        this.first = tempFirst.next;
        tempFirst.next = null;
        this.length--;
        return tempFirst;
    }
}

const queue = new Queue(10);
queue.enQueue(20);
queue.enQueue(30);
queue.enQueue(40);
queue.enQueue(50);
queue.enQueue(60);
queue.enQueue(70);
queue.enQueue(80);
queue.deQueue();
queue.deQueue();
queue.deQueue();

console.log(queue.print(), queue.length);