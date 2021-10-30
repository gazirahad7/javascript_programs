
/* ===== Function for quick sort ===== */
const quickSort = (originalList) => {
	const list = [...originalList];

	if (list.length < 2) 	return list;
	
	const pivot = list[0];

	const smaller = list.filter((item) => item < pivot);

	const bigger = list.filter((item) => item > pivot);
	//console.log(pivot);

	return [...quickSort(smaller), pivot, ...quickSort(bigger)];
};
const array = [1, 6, 3, 4, 5, 1, 0, 4, 8];
console.log("Before unsorted array ====>", array);
console.log("After Quick sorted array ====>", quickSort(array));
