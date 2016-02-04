'use strict';

class BinaryTree {

    constructor() {
        this.root = null;
    }

    insert(data) {
        this.root = this.insertToNode(this.root, data);
    }

    contains(data) {
        return this.containsInNode(this.root, data);
    }

    remove(data) {
        this.root = this.removeFromNode(this.root, data);
    }

    size() {
        return this.calc(this.root);
    }

    isEmpty() {
        return !this.root;
    }

    insertToNode(node, data) {
        if (!node) {
            node = new Node(data);
        } else {
            if (data <= node.data) {
                node.left = this.insertToNode(node.left, data);
            } else {
                node.right = this.insertToNode(node.right, data);
            }
        }
        return node;
    }

    containsInNode(node, data) {
        if (!node) {
            return false;
        }
        if (data === node.data) {
            return true;
        } else if (data < node.data) {
            return this.containsInNode(node.left, data);
        } else {
            return this.containsInNode(node.right, data);
        }
    }

    removeFromNode(node, data) {
        if (!node) {
            return node;
        }
        if (data < node.data) {
            node.left = this.removeFromNode(node.left, data);
        } else if (data > node.data) {
            node.right = this.removeFromNode(node.right, data);
        } else if (node.left && node.right) {
            node.data = this.getLeft(node.right).data;
            node.right = this.removeFromNode(node.right, node.right.data);
        } else if (node.left) {
            node = node.left;
        } else {
            node = node.right;
        }
        return node;
    }

    getLeft(node) {
        if (node.left) {
            return this.getLeft(node.left)
        } else {
            console.log(node);
            return node;
        }
    }

    calc(node) {
        if (!node) return 0;
        return this.calc(node.left) + this.calc(node.right) + 1;
    }

}
