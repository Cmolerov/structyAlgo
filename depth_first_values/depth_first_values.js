// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const depthFirstValues = (root, vals =[]) => {
  // todo
  if(!root) return vals;
  vals.push(root.val);
  
  if(root.left) depthFirstValues(root.left, vals)
  if(root.right) depthFirstValues(root.right, vals)
  
  return vals
  
};
​
module.exports = {
  depthFirstValues,
};
​