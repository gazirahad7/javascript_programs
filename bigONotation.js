


//Big O notation O(n ^2)
let data = ["A", "B", "C"]
for (let i = 0; i < data.length; i++){
  for (let j = 0; j < data.length; j++){
    // O(n ^ 2)
    console.log('data', data[i] + data[j]);
    
  }
}