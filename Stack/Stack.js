class Stack {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

// 2T
// 4
// 6
// 8
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length !== 1) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.length++;
        return this;
    }
}

const stack = new Stack(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
stack.push(80);