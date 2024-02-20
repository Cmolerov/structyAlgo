// class Node {
//   constructor(val) {
//     this.val = val;
//     this.next = null;
//   }
// }
​
const linkedListValues = (head) => {
  // todo
  let cur = head;
  let vals = [];
  while(cur){
    vals.push(cur.val)
    cur = cur.next
  }
  return vals
};
​
module.exports = {
  linkedListValues,
};
​