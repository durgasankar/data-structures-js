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

    contains(value) {
        if (this.root === null) return false;
        let tempRoot = this.root;
        while (tempRoot !== null) {
            if (value > tempRoot.value) {
                tempRoot = tempRoot.right;
            } else if (value < tempRoot.value) {
                tempRoot = tempRoot.left;
            } else {
                return true;
            }
        }
        return false;
    }

    findMinimun(currentNode) {
        while (currentNode.left != null) {
            currentNode = currentNode.left;
        }
        return currentNode;
    }

    findMaximum(currentNode) {
        while (currentNode.left != null) {
            currentNode = currentNode.right;
        }
        return currentNode;
    }
}