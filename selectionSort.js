
// Function for selection sort
function selectionSort(array) {
  for (let i = 0; i < array.length ; i++) {
    let minIndex = i;
    //console.log('i',i);
    
    for (let j = i + 1; j < array.length; j++) {
      //console.log('itaret',j);
      
      if (array[j] < array[minIndex]) {
        //console.log('j',j);
        minIndex = j;
      }
    }
    [array[i], array[minIndex]] = [array[minIndex], array[i]];
  }
  return array;
}
const inputArray = [4, 2, 6, 8, 3, 0]
console.log("====> The unsorted Array", inputArray)
console.log('====>The sorted Array', selectionSort(inputArray));
