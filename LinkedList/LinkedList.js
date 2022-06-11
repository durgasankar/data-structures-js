class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.tail = newNode;
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        // having no data in the list
        if (!this.head) return undefined;
        // more than one data in the list
        let prevNode = this.head;
        let tempNode = this.head;
        while (tempNode.next) {
            prevNode = tempNode;
            tempNode = tempNode.next;
        }
        this.tail = prevNode;
        this.tail.next = null;
        this.length--;
        // if length is 0 it will points to default.
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
    }
}


const myList = new LinkedList(2);
myList.push(4);
myList.push(6);
myList.push(8);
myList.push(10);
console.log(myList);
myList.pop();
myList.pop();
myList.pop();
// myList.pop();
// myList.pop();
// myList.pop();
console.log(myList);