const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

function findMinBST (rootNode) {
if (rootNode.left === null) {
  return rootNode.val
}
else {
  return findMinBST(rootNode.left)
}
}

function findMaxBST (rootNode) {
  if (rootNode.right === null) {
    return rootNode.val
  }
  else {
    return findMaxBST(rootNode.right)
  }
}

function findMinBT (rootNode) {
  // if (root === null) return false;
  // if (root.value === target) return true;
  // if (binaryTreeSearch(root.left, target)) return true;
  // return binaryTreeSearch(root.right, target);


  // Reference nodes that we visited
  let min = rootNode.val;
  // let currVal = curr.val
if (rootNode === null) return

if (rootNode.left) {
    min =  Math.min(findMinBT(rootNode.left), min)
  }
if (rootNode.right) {
    min = Math.min(findMinBT(rootNode.right), min)
}
return min
}

function findMaxBT (rootNode) {
  // Your code here
  let max = rootNode.val;
  // let currVal = curr.val
if (rootNode === null) return

if (rootNode.left) {
    max =  Math.max(findMaxBT(rootNode.left), max)
  }
if (rootNode.right) {
    max = Math.max(findMaxBT(rootNode.right), max)
}
return max
}

function getHeight (rootNode) {
  if (!rootNode) return -1
  if (rootNode.left === null && rootNode.right === null) return 0
//  We need to traverse to the farthest depth to find the height

let countLeft = 1
let countRight = 1
if (rootNode.left) {
  countLeft += getHeight(rootNode.left)
  }
  if (rootNode.right) {
    countRight += getHeight(rootNode.right)
  }
  if (countLeft > countRight) {
    return countLeft
  }
  return countRight
}

function balancedTree (rootNode) {
  // Your code here
  
}

function countNodes (rootNode) {
  // Your code here
}

function getParentNode (rootNode, target) {
  // Your code here
}

function inOrderPredecessor (rootNode, target) {
  // Your code here
}

function deleteNodeBST(rootNode, target) {
  // Do a traversal to find the node. Keep track of the parent

  // Undefined if the target cannot be found

  // Set target based on parent

  // Case 0: Zero children and no parent:
  //   return null

  // Case 1: Zero children:
  //   Set the parent that points to it to null

  // Case 2: Two children:
  //  Set the value to its in-order predecessor, then delete the predecessor
  //  Replace target node with the left most child on its right side,
  //  or the right most child on its left side.
  //  Then delete the child that it was replaced with.

  // Case 3: One child:
  //   Make the parent point to the child

}

module.exports = {
    findMinBST,
    findMaxBST,
    findMinBT,
    findMaxBT,
    getHeight,
    countNodes,
    balancedTree,
    getParentNode,
    inOrderPredecessor,
    deleteNodeBST
}
