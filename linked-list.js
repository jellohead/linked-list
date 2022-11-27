// linked-list.js

class LinkedList {
    constructor(value) {
        this.value = value;
    }

    append() {
        console.log('in LinkedList.append')
    }

    prepend() { }

    size() { }

    head() { }

    tail() { }

    at(index) { }

    pop() { }

    contains(value) { }

    find(value) { }

    toString() { }

}

class Node {
    constructor(element) {
        this.element = null;
        this.next = null;
    }
}

window.addEventListener("DOMContentLoaded", (e) => {
    console.log('DOM loaded and parsed');
})

let list = new LinkedList('things');
