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
}

const dublyLinkedList = new DublyLinkedList(10);
dublyLinkedList.push(20);
dublyLinkedList.push(30);
dublyLinkedList.push(40);
dublyLinkedList.push(50);
dublyLinkedList.push(60);
dublyLinkedList.push(70);
dublyLinkedList.push(80);
console.log(dublyLinkedList.print());