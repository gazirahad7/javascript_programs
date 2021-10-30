const stack = []
// stack push
function pushOperation() {
  stack.push(1, 2, 3, 4, 5);
  console.log('Push ====>', stack);
}
pushOperation()
// stack pop
function popOperation() {
  stack.shift(1);
  console.log('Pop ====>',stack);
}
popOperation()
// stack length
function stackLength() {
  console.log('strack length ===>', stack.length);
}
stackLength()
// Is empty 
function stackIsempty() {
  console.log("Isempty ====>", stack.length == -1);
   
}
stackIsempty()
function peekOperation(){
  //const peek = stack.map(el => el )
  console.log('peek ===>', stack.length -1);
  
}
peekOperation()
;
