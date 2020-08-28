// ============================================================================
// Implementation Exercise: Stack
// ============================================================================
//
// -------
// Prompt:
// -------
//
// Implement a Stack and all of its methods below!
//
// ------------
// Constraints:
// ------------
//
// Make sure the time and space complexity of each is equivalent to those 
// in the table provided in the Time and Space Complexity Analysis section
// of your Stack reading!
//
// -----------
// Let's Code!
// -----------

class Node {
    constructor(val, next = null) {
        this.value = val;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val)
        if (this.length === 0) {
            this.top = newNode;
            this.length++;
            return this.size();
        }
        if (this.length > 0) {
            let previousNode = this.top
            this.top = newNode;
            newNode.next = previousNode;
            this.length++;
            return this.size();
        }
    }

    pop() {
        let removed;
        if (this.size() === 0) {
            return null;
        }
        if (this.size() === 1) {
            removed = this.top
            this.top = null;
        }
        if (this.size() > 1) {
            removed = this.top
            // this.top.next = null;
            this.top = this.top.next;
        }
        this.length--;
        return removed.value;
    }

    size() {
        return this.length;
    }

}

exports.Node = Node;
exports.Stack = Stack;
