/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    
};

let Node = function(key) {
    this.key = key;
    this.left = this.right = null;
};

let root = null;

function insert(key) {
    let newNode = new Node(key);

    if (root === null) {
        root = newNode;
    } else {
        insertNode(root, newNode);
    }
};

function insertNode(node, newNode) {
    
}