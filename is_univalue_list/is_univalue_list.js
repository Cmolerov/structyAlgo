// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const isUnivalueList = (head) => {
  // todo
  if(!head.next) return true
  if(head.val !== head.next.val) return false
  
  return isUnivalueList(head.next)
  
};
​
module.exports = {
  isUnivalueList,
};
​