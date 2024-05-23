// Before starting, copy and paste your guided practice work from
// `binary-search-tree.js` into this file

// Your code here
class TreeNode {
    constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
    }
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
      // Your code here
    }

    insert(val, currentNode=this.root) {
        if (!this.root) {
        this.root = new TreeNode(val)
          return
        }
        if (val < currentNode.val) {
          if (!currentNode.left) {
            currentNode.left = new TreeNode(val)
          } else {
            this.insert(val, currentNode.left)
          }
          } else {
            if (!currentNode.right) {
              currentNode.right = new TreeNode(val)
            } else {
              this.insert(val, currentNode.right)
            }
          }
        }





    search(val) {
      // Your code here
  if(!this.root) return false

      let current = this.root
      let found = false
      while (current && !found) {
        if (val < current.val) {
          current = current.left
        } else if ( val > current.val) {
          current = current.right
        } else {
          found = current
        }
        }
        return found ? true : false
      }



    preOrderTraversal(currentNode = this.root) {
      if (currentNode) {
      // Your code here
      console.log(currentNode.val)
      this.preOrderTraversal(currentNode.left)
      this.preOrderTraversal(currentNode.right)
      }
    }


    inOrderTraversal(currentNode = this.root) {

      if (currentNode) {
        this.inOrderTraversal(currentNode.left)
        console.log(currentNode.val)
        this.inOrderTraversal(currentNode.right)
        }
    }


    postOrderTraversal(currentNode = this.root) {
      // Your code here
      if (currentNode) {
        this.postOrderTraversal(currentNode.left)
        this.postOrderTraversal(currentNode.right)
        console.log(currentNode.val)
        }
    }

      // Breadth First Traversal - Iterative
    breadthFirstTraversal() {
      // Your code here
      const queue = [this.root]

      while(queue.length) {
          let currNode = queue.shift()
          console.log(currNode.val)
          if (currNode.left){
              queue.push(currNode.left)

          queue.push(currNode.right)
      }
      }
    }

    // Depth First Traversal - Iterative
    depthFirstTraversal() {
      // Your code here

        const stack = [this.root]
        while (stack.length){
            const currNode = stack.pop()
            console.log(currNode.val)
            if (currNode.left){
                stack.push(currNode.left)
            }
            if (currNode.right){
                stack.push(currNode.right)
            }
        }
    }
    }

    module.exports = {BinarySearchTree, TreeNode}
