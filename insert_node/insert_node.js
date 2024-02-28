class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const insertNode = (head, value, index) => {
  // todo
  const newVal = new Node(value);
  if(index === 0){
    newVal.next = head;
    return newVal
  }
  
  let cur = head.next; 
  let prev = head;
  
  for(let i = 1; i < index + 1; i++){
    if(i === index){
      prev.next = newVal;
      newVal.next = cur;
      return head;
    }
    prev = cur;
    cur = cur.next;
  }
  
//   if(index === 0){
//     let next = head; 
//     head = newVal;
//     head.next = next
//     return head;
//   }
//   console.log(head.next)
//   return insertNode(head.next, value, index--)
};
​
module.exports = {
  insertNode,
};
​