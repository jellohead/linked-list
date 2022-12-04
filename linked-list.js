// linked-list.js

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        console.log('in LinkedList.append')
        const newNode = new Node(value);
        if (!this.head) { //checks if this.head is null
            console.log('this.head = ' + this.head);
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    prepend(value) {
        console.log('in prepend');
        const myNewNode = new Node(value);
        this.append('dummy');

        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            console.log('myNewNode.value = ' + myNewNode.value)

            list.head.value = myNewNode.value;
        }
        // this.length++;
        return this;

    }

    size() {
        return this.length;
    }

    headElement() {
        return this.head;
    }

    tailElement() {
        return list.tail;
    }

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

    contains(value) {
        console.log('in contains')
        let myExpression = '';
        for (let i = 0; i < this.length; i++) {
            myExpression += 'next';

            console.log(this.head.myExpression.value)
        }

    }

    find(value) { }

    toString() { }

}

window.addEventListener("DOMContentLoaded", (e) => {
    console.log('DOM loaded and parsed');
})

let list = new LinkedList();
list.append('tree');
list.append('grass');
list.append('rock');
// list.append('flower');
// console.log('popped list item is ');
// console.log(list.pop());
// console.log('list size = ' + list.size());
// console.dir('tail element is');
// console.dir(list.tailElement());
// console.log('head element is');
// console.dir(list.headElement());