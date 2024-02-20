// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const getNodeValue = (head, index) => {
  // todo
  if(index === 0) return head.val
  
  let cur = head.next;
  let count = 1;
  while(cur){
    if(count === index) return cur.val;
    cur = cur.next;
    count += 1; 
  }
  
  return null
};
​
module.exports = {
  getNodeValue,
};
​