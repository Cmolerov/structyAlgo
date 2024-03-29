// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const treeSum = (root) => {
  // todo
  if(!root) return 0
  const stack = [root];
  let sum = 0;
  
  while(stack.length > 0){
    const cur = stack.pop();
    sum += cur.val
    if(cur.right) stack.push(cur.right)
    if(cur.left) stack.push(cur.left)
    
  }
  return sum
  
//   if(!root) return sum
  
//   sum += root.val 
  
//   if(root.left) return treeSum(root.left, sum)
//   if(root.right) return treeSum(root.right, sum)
  
//   return sum
​
//   // return treeSum(root.left || root.right, sum)
};
​
module.exports = {
  treeSum,
};
​