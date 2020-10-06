// This question is asked by Google. Given the reference to the root of a binary search tree and a search value, return the reference to the node that contains the value if it exists and null otherwise.
// Note: all values in the binary search tree will be unique.

// Tree Class - Do Not Edit
class Tree {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

const findTreeNode = (root, target) => {
  let targetNode = null;
  if (root === null) return targetNode;
  // Searches the tree for target
  traverseTree(root, target);
  return targetNode;

  function traverseTree(node, target) {
    // Assigns targetNode to the node that matches the target value
    if (node.val === target) return (targetNode = node);
    // Traverse left and right branches if they exist
    if (node.left) traverseTree(node.left, target);
    if (node.right) traverseTree(node.right, target);
  }
};

// Test Case 1
//Ex: Given the tree and the search value of 1

//        3
//       / \
//      1   4

//  Return a reference to the node containing 1.
let tree = new Tree(3);
tree.left = new Tree(1);
tree.right = new Tree(4);

console.log(findTreeNode(tree, 1));
// Expect: Tree { val: 1, left: null, right: null }

// Test Case 2
// Ex: Given the tree and the search vaue of 9

//         7
//        / \
//       5   9
//          / \
//         8   10

// Return a reference to the node containing 9.

tree = new Tree(7);
tree.left = new Tree(5);
tree.right = new Tree(9);
tree.right.left = new Tree(8);
tree.right.right = new Tree(10);
console.log(findTreeNode(tree, 9));
// Expect: Tree {
//   val: 9,
//   left: Tree { val: 8, left: null, right: null },
//   right: Tree { val: 10, left: null, right: null }
// }

// Test Case 3
// Ex: Given the tree
//
//         8
//        / \
//       6   9
// and the search value 7 return null.

tree = new Tree(8);
tree.left = new Tree(6);
tree.right = new Tree(9);
console.log(findTreeNode(tree, 7)); // Expect Null
