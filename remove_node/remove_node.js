// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const removeNode = (head, targetVal) => {
  // todo
  if(!head.next && (head.val === targetVal)) return null; 
  if(head.val === targetVal){
    head = head.next; 
    return head
  }
  
  let cur = head.next; 
  let prev = head; 
  
  while(cur){
    if(cur.val === targetVal){
      prev.next = cur.next
      return head;
    }
    prev = cur;
    cur = cur.next; 
  }
};
​
module.exports = {
  removeNode,
};
​