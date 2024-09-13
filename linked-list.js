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

    toString() {
        let string = "";
        let current = this.head;

        while (current) {
            string += `( ${current.value} ) => `;

            current = current.nextNode;
        }

        // End of list
        string += `( ${current} )`;

        console.log(string);
    }
}

export default LinkedList;
