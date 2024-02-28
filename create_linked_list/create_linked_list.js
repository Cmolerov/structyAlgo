class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
​
const createLinkedList = (values) => {
  // todo
  if(values.length === 0) return null; 
  
  let head = new Node(values[0]);
  let index = 1;
  let cur = head;
  
  while(index < values.length){
    let newVal = new Node(values[index]);
    cur.next = newVal;
    cur = cur.next;
    index++
  }
  return head;
};
​
module.exports = {
  createLinkedList,
};
​
  for(let i = 1; i < index + 1; i++){