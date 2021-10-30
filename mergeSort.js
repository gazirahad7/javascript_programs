const mergSort = (array) => {
	if (array.length < 2) return array;

	// get Middle index
	const middle = Math.floor(array.length / 2);

	// split array in two sides
	const leftSide = array.slice(0, middle);
	const rightSide = array.slice(middle, array.length);

	// use recusion  to continue splitting
	// console.log("Midde ==>", middle);
	// console.log("===========================");
	// console.log("Left==>", leftSide);
	// console.log("===========================");
	// console.log("Right ==>", rightSide);
	// console.log("===========================");

	return merge(mergSort(leftSide), mergSort(rightSide));
};

const merge = (left, right) => {
	// create new array
	const output = [];

	// check if left & right array is empty
	while (left.length && right.length) {
		// find lower  value
		if (left[0] <= right[0]) {
			// add left value
			output.push(left.shift());
		} else {
			// add right value
			output.push(right.shift());
		}
	}

	// Merge left array
	
	while (left.length) output.push(left.shift());
	// Merge right array

	while (right.length) output.push(right.shift());
	// return result array
	//console.log("Sorting Array ==>:", output);

	return output;
};
const input = [5, 1, 10, -1, 7, 3,0];
console.log("Before Array", input);
console.log("After merge sorted array =>", mergSort(input));
