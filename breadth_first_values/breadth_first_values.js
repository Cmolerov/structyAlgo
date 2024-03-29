// class Node {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }
​
const breadthFirstValues = (root) => {
  // todo
  if(!root) return [];
  
  let stack = [root];
  let vals = [];
  
  while(stack.length > 0){
    const cur = stack.shift();
    if(cur.left) stack.push(cur.left);
    if(cur.right) stack.push(cur.right)
    
    vals.push(cur.val)
  }
  
  return vals
};
​
module.exports = {
  breadthFirstValues,
};
​