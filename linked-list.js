// linked-list.js

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        console.log('in LinkedList.append')
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend() { }

    size() {
        return list.length;
    }

    head() { }

    tail() { }

    at(index) { }

    pop() {
        if (!this.head) return;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
            this.length = 0;
            return;
        }

        let current = this.head;
        let newTail = null;

        while (current) {
            if (current.next) {
                newTail = current;
            }
            current = current.next;
        }
        const deletedNode = this.tail;
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        return deletedNode;
    }

    contains(value) { }

    find(value) { }

    toString() { }

}

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    console.log('DOM loaded and parsed');
})

let list = new LinkedList('things');
list.append('tree');
list.append('grass');
list.append('rock');
list.append('flower');
console.log(list.pop());
console.log(list.size());
