class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DublyLinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        // 2H=4=6T
        const newNode = new Node(value);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    print() {
        let tempHead = this.head;
        const values = {};
        let index = 0;
        while (tempHead) {
            values[index] = tempHead.value;
            tempHead = tempHead.next;
            index++;
        }
        return values;
    }

    pop() {
        // 2H=4=6=8T before
        // 2H=4=6T after
        if (this.length === 0) return undefined;
        let tempTail = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            tempTail.prev = null;
        }
        this.length--;
        return tempTail;
    }

    unshift(value) {
        //   4H=6=8T before
        // (2H)=4=6=8T after
        if (this.length === 0) {
            this.push(value);
            return;
        }
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    shift() {
        // (2H)=4=6=8T before
        //     4H=6=8T after
        if (this.length === 0) return undefined;
        if (this.length === 1) {
            this.pop();
            return;
        }
        let tempHead = this.head;
        this.head = this.head.next;
        this.head.prev = null;
        tempHead.next = null;
        return tempHead;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        let tempNode = undefined;
        if (index < this.length / 2) {
            // index = 4 and length = 10
            tempNode = this.head;
            for (let i = 0; i < index; i++) {
                tempNode = tempNode.next;
            }
            return tempNode;
        }
        tempNode = this.tail;
        for (let i = this.length - 1; i > index; i--) {
            tempNode = tempNode.prev;
        }
        return tempNode;
    }

    set(index, value) {
        let currentNode = this.get(index);
        if (currentNode === undefined) return false;
        currentNode.value = value;
        return true;
    }
}

const dublyLinkedList = new DublyLinkedList(10);
// dublyLinkedList.pop();
// dublyLinkedList.unshift(5);
dublyLinkedList.push(20);
dublyLinkedList.push(30);
dublyLinkedList.push(40);
dublyLinkedList.push(50);
dublyLinkedList.push(60);
dublyLinkedList.push(70);
dublyLinkedList.push(80);
// dublyLinkedList.unshift(2);
// dublyLinkedList.unshift(1);

// dublyLinkedList.pop();
// dublyLinkedList.pop();
// dublyLinkedList.pop();
// dublyLinkedList.shift();
dublyLinkedList.set(4, 99);
console.log(dublyLinkedList.print(), dublyLinkedList.length);