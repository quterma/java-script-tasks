// quick search
const quickSearch = arr => {
	if (arr.length < 2) return arr;
	else {
		let probe = arr[0];
		let less = arr.slice(1).filter(element => element < probe);
		let greater = arr.slice(1).filter(element => element > probe);
		return quickSearch(less).concat(probe).concat(quickSearch(greater));
	}
};

const a = [1, 6, 0, 28, 351, 2, 7, 3];
const sortedArray = quickSearch(a);
console.log(sortedArray);
