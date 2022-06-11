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
        return tempNode;
    }

    // add the element to beginning
    unshift(value) {
        const newNode = new Node(value);
        // if no node is there and trying to add a new Node
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head.next;
            this.head = newNode;
        }
        this.length++;
        return this;
    }

    // removing element to the begging of the list
    shift() {
        // if no node is there and trying to remove
        if (!this.head) return undefined;
        // more than one items
        let tempNode = this.head;
        this.head = this.head.next;
        tempNode.next = null;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return tempNode;
    }

    // find value based on the index
    get(index) {
        // if index is not in valid range
        if (index < 0 || index >= this.length) return undefined;
        let tempNode = this.head;
        for (let i = 0; i < index; i++) {
            tempNode = tempNode.next;
        }
        return tempNode;
    }

    // based on index sets value at that particular index
    set(index, value) {
        const fetchedIndex = this.get(index);
        if (fetchedIndex) {
            fetchedIndex.value = value;
            return true;
        }
        return false;
    }

    // insert any value at any particular index
    insert(index, value) {
        // value entering to invalid position
        if (index < 0 || index >= this.length) return false;
        // value entering to start
        if (index === 0) return this.unshift(value);
        // value entering to last
        if (index === this.length - 1) return this.push(value);
        // value entering to desired location
        const newNode = new Node(value);
        const tempNode = this.get(index - 1);
        newNode.next = tempNode.next;
        tempNode.next = newNode;
        this.length++;
        return true;
    }

    // just to print the values of the list
    print() {
        let myArray = [];
        let tempNode = this.head;
        while (tempNode) {
            myArray.push(tempNode.value);
            tempNode = tempNode.next;
        }
        return myArray;
    }
}

const myList = new LinkedList(2);
myList.push(4);
myList.push(6);
myList.push(8);
myList.push(10);
// console.log(myList);
// myList.pop();
// myList.pop();
// myList.pop();
// myList.pop();
// myList.pop();
// myList.pop();
// console.log(myList);
// myList.unshift(100);
// myList.unshift(200);
// myList.unshift(300);
// console.log(myList)
// myList.shift();
// myList.shift();
// myList.shift();
// console.log(myList)
// console.log(myList.get(1))
// console.log(myList.set(1, 99))
myList.insert(0, 77);
myList.insert(1, 99);
myList.insert(myList.length - 1, 101);
myList.insert(3, 10001)
console.log(myList.print());