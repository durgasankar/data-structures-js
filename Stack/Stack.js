class Stack {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class Stack {
    constructor(value) {
        const newNode = new Node(value);
        this.top = newNode;
        this.length = 1;
    }
    // 2T
    // 4
    // 6
    // 8
    push(value) {
        const newNode = new Node(value);
        if (this.length !== 1) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.length++;
        return this;
    }

    // 2T(remove)
    // 4T
    // 6
    // 8
    pop() {
        let tempTop = this.top;
        if (this.length === 1) {
            this.top = null;
        } else {
            this.top = this.top.next;
        }
        tempTop.next = null;
        this.length--;
    }
}

const stack = new Stack(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);
stack.push(60);
stack.push(70);
stack.pop();
stack.pop();
stack.pop();
stack.pop();