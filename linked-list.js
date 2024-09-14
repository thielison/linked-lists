class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node();
        this.listSize = 0;
    }

    // Adds a new node containing value to the end of the list
    append(value) {
        const node = new Node(value);

        if (this.listSize === 0) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.nextNode) {
                current = current.nextNode;
            }

            current.nextNode = node;
        }

        this.listSize += 1;
    }

    // Adds a new node containing value to the start of the list
    prepend(value) {
        // If list is empty (if there's no head), head will be set to this new Node
        if (!this.head) {
            this.head = new Node(value);
        } else {
            // If there's already a head, current head will be set to this new Node
            // and all the other nodes will be pushed forward
            this.head = new Node(value, this.head);
        }

        this.listSize += 1;
    }

    // Returns the total number of nodes in the list
    size() {
        return `Num of nodes: ${this.listSize}`;
    }

    // Returns the first node in the list
    headNode() {
        if (this.listSize === 0) {
            return `List is empty!`;
        }

        return `First node: ( ${this.head.value} )`;
    }

    // Returns the last node in the list
    tailNode() {
        if (this.listSize === 0) {
            return `List is empty!`;
        }

        let current = this.head;

        while (current.nextNode) {
            current = current.nextNode;
        }

        return `Last node: ( ${current.value} )`;
    }

    // Returns the node at the given index
    at(index) {
        if (index < 0 || index > this.listSize) {
            return `Index out of range.`;
        }

        let current = this.head;
        let count = 0;

        while (current) {
            if (count === index) {
                return `Node at index ${index}: ( ${current.value} )`;
            }

            count += 1;
            current = current.nextNode;
        }

        return `Node not found!`;
    }

    // Removes the last element from the list
    pop() {
        if (this.listSize === 0) {
            return `List is empty!`;
        }

        let current = this.head;
        let previous;

        while (current.nextNode) {
            previous = current;
            current = current.nextNode;
        }

        previous.nextNode = null;
        this.listSize -= 1;

        return `Last element removed from the list.`;
    }

    // Returns true if the passed in value is in the list and otherwise returns false
    contains(value) {
        if (this.listSize === 0) {
            return `List is empty!`;
        }

        let current = this.head;

        while (current) {
            if (current.value === value) {
                return true;
            }

            current = current.nextNode;
        }

        return false;
    }

    // Represents LinkedList objects as strings
    toString() {
        let string = "";
        let current = this.head;

        while (current) {
            string += `( ${current.value} ) => `;

            current = current.nextNode;
        }

        // End of list
        string += `( ${current} )`;

        return string;
    }
}

export default LinkedList;
