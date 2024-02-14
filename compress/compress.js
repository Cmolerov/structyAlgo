const compress = (s) => {
  // todo
  let res=''; 
  let count = 1; 
  let i = 0; 
  let j = i + 1;
  
  while(i < s.length){
    if(s[i] === s[j]){
      count += 1;
      j ++
    }else{
      res += count > 1 ? (count + s[i]) : s[i];
      count = 0;
      i = j; 
    }
  }
  
  return res;
};
​
module.exports = {
  compress,
};
​