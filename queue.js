const queue = []
// enque 
console.log('========== Queue in JS ===========');

function enQ() {
  queue.push(1, 2, 3,4,5)
  console.log('Enqueue ====>', queue);
  
}
enQ()
// add element end 
function enQEnd() {
  queue.unshift(6)
  console.log('Add queue Beginning ====>', queue);
  
}
enQEnd()

// dequeue
function deQ() {
  queue.shift(1)
  console.log('Dequeue ====>', queue);
  
}
deQ()
// dequeue element end
function deQEnd() {
  queue.pop(2)
  console.log('Dequeue end ====>', queue);
  
}
deQEnd()
// peek first
function peekFirst() {
  console.log('Peek First ====>', queue[0]);
}

peekFirst()
// peek last
function peekLast() {
  console.log("Peek Last ====>", queue.length  - 1);
}
peekLast();
// queue size
function qSize() {
  console.log("Queue size ====>", queue.length);
}
qSize();
console.log("========== Queue in JS ===========");
