// Node Class
class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}
// Linked List Class
class LinkedList {
  constructor(node = new Node("Head")) {
    this.head = node;
    this.tail = node;
  }
  addTail(value) {
    let newNode = new Node(value);
    if (this.head === null && this.head == null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }
  printList() {
    let string = "LinkedList: ";
    let cur = this.head;
    // Build out string from linked list
    while (cur !== null) {
      string += `${cur.value} -> `;
      cur = cur.next;
    }
    // Add null after reaching the end
    string += `null\n`;
    // Print List
    console.log(string);
  }
}

// This question is asked by Google. Given a linked list and a value, remove all nodes containing the provided value, and return the resulting list.

const removeValue = (linkedlist, target) => {
  // create pointer that starts at the head
  // traverse the linked list
  // when we reach a node with the target value as it's next, rewire the pointers
  // skip the node and make the nodes next.next the next w/ a temp variable

  cur = linkedlist.head;
  while (cur !== null) {
    console.log(cur.value);
    if (cur.next.value === target) {
      // rewire pointers
      let newNext = cur.next.next;
      let oldNext = cur.next;
      oldNext.next = null;
      cur.next = newNext;
    }
    cur = cur.next;
  }
};

// Ex: Given the following linked lists and values...

// 1->2->3->null, value = 3, return 1->2->null
let list = buildLinkedList([1, 2, 3]);
let remove = 3;
console.log("Removing All Nodes With Value:", remove);
list.printList();
removeValue(list, remove);
console.log("After Removal:");
list.printList();

//ToDo:
// 8->1->1->4->12->null, value = 1, return 8->4->12->null
// list = buildLinkedList([8, 1, 1, 4, 12]);
// remove = 1;
// console.log("Removing All Nodes With Value:", remove);
// list.printList();
// removeValue(list, remove);
// console.log("After Removal:");
// list.printList();
// 7->12->2->9->null, value = 7, return 12->2->9->null

// Create linked lists with array of values
function buildLinkedList(nodes) {
  // build new list with first node from arr
  let linkedlist = new LinkedList(new Node(nodes[0]));
  // Loop through input range and populate remainder of list
  for (let i = 1; i < nodes.length; i++) {
    linkedlist.addTail(nodes[i]);
  }
  return linkedlist;
}
