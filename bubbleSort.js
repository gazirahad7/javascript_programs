function bubbleSort(array) {
	if (array.length < 2) return array;
	let temp;
	for (let i = array.length; i > 0; i--) {
		for (let j = 0; j < i; j++) {
			if (array[j] > array[j + 1]) {
				temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
const myArray = [3, 1, 4, 2, 0];
console.log("Before Array", myArray);
console.log("After Bubble sorted array:", bubbleSort(myArray));
