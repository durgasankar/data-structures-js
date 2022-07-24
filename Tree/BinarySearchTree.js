class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST {
    constructor(value) {
        const newNode = new Node(value);
        this.root = newNode;
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode;
            return this;
        }
        let tempRoot = this.root;
        while (tempRoot !== null) {
            if (tempRoot.value === newNode.value) return undefined;
            if (newNode.value > tempRoot.value) {
                // move right
                if (tempRoot.right === null) {
                    tempRoot.right = newNode;
                    return this;
                }
                tempRoot = tempRoot.right;
            } else {
                if (tempRoot.left === null) {
                    tempRoot.left = newNode;
                    return this;
                }
                tempRoot = tempRoot.left;
            }
        }
    }
}