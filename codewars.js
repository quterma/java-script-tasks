function iqTest(numbers) {
	const arr = numbers.split(" ");
	const odd = arr.filter(n => Number(n) % 2 != 0);
	const even = arr.filter(n => Number(n) % 2 == 0);
	return odd.length === 1 ? arr.indexOf(odd[0]) + 1 : arr.indexOf(even[0]) + 1;
}

// silly adding
function add(num1, num2) {
	const split = num =>
		num
			.toString()
			.split("")
			.map(s => (s = Number(s)));
	let big = [];
	let small = [];
	if (num1 >= num2) {
		big = split(num1);
		small = split(num2);
	} else {
		big = split(num2);
		small = split(num1);
	}

	const j = big.length - small.length;
	for (let i = 0; i < j; i++) {
		small.unshift(0);
	}

	let result = [];

	for (let i = big.length - 1; i >= 0; i--) {
		result.unshift(big[i] + small[i]);
	}

	result = Number(result.join(""));

	return result;
}

// sum sum of digits (for natural numbers) till one digit
function digital_root(n) {
	const one = n < 10 ? n : digital_root((n - (n % 10)) / 10) + digital_root(n % 10);
	return one < 10 ? one : digital_root(one); // or	return ((n - 1) % 9) + 1;
}

function hello(name) {
	const greet = name ? name.charAt(0).toUpperCase() + name.toLowerCase().slice(1) + "!" : "World!";
	return `Hello, ${greet}`;
}

function pairs(arr) {
	let count = 0;
	for (let i = 0; i < arr.length; i += 2) {
		if (Math.abs(arr[i] - arr[i + 1]) === 1) {
			count += 1;
		}
	}
	return count;
}

function index(array, n) {
	return array.indexOf(array[n]) >= 0 ? Math.pow(array[n], n) : -1; // array.length > n ? Math.pow(array[n], n) : -1;
}

function flyBy(lamps, drone) {
	// or [...lamps].fill(`o`, 0, drone.length).join(``)
	// or `${`o`.repeat(drone.length)}${lamps}`.slice(0, lamps.length);
	if (!drone) return;
	const lampsArray = lamps.split("");
	const smashed = lampsArray.splice(0, drone.length);
	const turnedOff = smashed.map(lamp => (lamp = "o"));
	return turnedOff.concat(lampsArray).join("");
}

const arr = N => {
	const result = [];
	for (let i = 0; i < N; i += 1) {
		result.push(i);
	}
	return result;
};

function shark(pontoonDistance, sharkDistance, youSpeed, sharkSpeed, dolphin) {
	return pontoonDistance / youSpeed < (sharkDistance / sharkSpeed) * (dolphin ? 2 : 1) ? "Alive!" : "Shark Bait!";
}

function peak(arr) {
	let mid = -1;
	for (let i = 1; i <= arr.length - 2; i += 1) {
		const left = arr.slice(0, i).reduce((acc, curr) => acc + curr);
		const right = arr.slice(i + 1, arr.length).reduce((acc, curr) => acc + curr);
		if (left === right) {
			mid = i;
		}
	}
	return mid;
}

// let diff = [...str].reverse().filter((x, i) => x != str[i]).length
// return diff == 2 || (diff == 0 && str.length % 2 == 1)
function solve1(str) {
	const left = [...str].slice(0, Math.floor(str.length / 2));
	const rRight = [...str].slice(Math.ceil(str.length / 2), str.length).reverse();
	let count = 0;
	for (let i = 0; i < left.length; i++) {
		if (left[i] != rRight[i]) {
			count += 1;
		}
	}
	if ([...str].length % 2 === 0 && count === 1) {
		return true;
	} else if ([...str].length % 2 != 0 && count < 2) {
		return true;
	} else {
		return false;
	}
}

function solve(n) {
	const isPrime = num => {
		let s = Math.sqrt(num);
		for (let i = 2; i <= s; i++) {
			if (num % i === 0) return false;
		}
		return true;
	};

	for (let i = 0; i < n; i++) {
		if (isPrime(n - i)) return n - i;
		if (isPrime(n + i)) return n + i;
	}
}

function isDivideBy(number, a, b) {
	return number % a === 0 && number % b === 0;
}

const nextId = (ids, i = 0) => (ids.includes(i) ? nextId(ids, i + 1) : i);

const capitalizeWord = word => word.charAt(0).toUpperCase() + word.slice(1);

function triangle(row) {
	if (row.length === 1) return row[0];
	let nextRow = [];
	for (let i = 0; i < row.length; i++) {
		if (row[i] + row[i + 1] === "RG" || row[i] + row[i + 1] === "GR") nextRow.push("B");
		if (row[i] + row[i + 1] === "GB" || row[i] + row[i + 1] === "BG") nextRow.push("R");
		if (row[i] + row[i + 1] === "RB" || row[i] + row[i + 1] === "BR") nextRow.push("G");
		if (row[i] === row[i + 1]) nextRow.push(row[i]);
	}
	return triangle(nextRow);
}

function sumOfN(n) {
	const array = [0];
	for (let i = 1; i <= Math.abs(n); i++) {
		const mini = [];
		for (let j = 0; j <= i; j++) {
			n > 0 ? mini.push(j) : mini.push(-j);
		}
		array[i] = mini.reduce((a, b) => a + b);
	}
	return array;
}

const parseF = s => (typeof s != "boolean" && typeof Number(s) === "number" && isFinite(Number(s)) ? Number(s) : null);

function solution(value) {
	const s = value.toString();
	const l = s.length;
	result = l < 5 ? "0".repeat(5 - l) + s : s;
	return `Value is ${result}`;
}

const solve2 = s => Math.max(...s.split(/\D/g));

const quickSearch = arr => {
	if (arr.length < 2) return arr;
	else {
		let probe = arr[0];
		let less = arr.slice(1).filter(element => element < probe);
		let greater = arr.slice(1).filter(element => element > probe);
		return quickSearch(less).concat(probe).concat(quickSearch(greater));
	}
};

function sort(nums) {
	if (nums.length < 1 || nums === null) return [];
	if (nums.length < 2) return nums;
	const probe = nums[0];
	const less = nums.slice(1).filter(el => el < probe);
	const greater = nums.slice(1).filter(el => el > probe);
	return sort(less).concat(probe).concat(sort(greater));
}

function solve3(arr) {
	let a;
	arr.forEach(n => {
		if (!arr.includes(-n)) {
			a = n;
		}
	});
	return a;
}

function wordValue(a) {
	const alpha = [..." abcdefghijklmnopqrstuvwxyz"];
	const convert = (el, i) =>
		el
			.split("")
			.map(e => alpha.indexOf(e))
			.reduce((acc, cur) => acc + cur) *
		(i + 1);
	return a.map((element, ind) => (element != [] ? convert(element, ind) : 0));
}

function martingale(bank, outcomes) {
	const result = [0];
	let k = 100;
	for (let i = 0; i < outcomes.length; i++) {
		if (outcomes[i]) {
			result.push(k);
			k = 100;
		} else {
			result.push(-k);
			k *= 2;
		}
	}
	return result.reduce((acc, curr) => acc + curr) + bank;
}

const pluck = (objs, name) => objs.map(e => e[name]);

function isPrime(num) {
	if (num < 2) return false;
	for (let i = 2; i < Math.sqrt(num); i++) {
		if (num % i === 0) return false;
	}
	return true;
}

function wave(str) {
	const c = [...str].map((el, i) => str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
	return c;
}

const sol1 = string => [...string].map(c => (c == c.toUpperCase() ? " " + c : c)).join("");

const gridIndex = (grid, indices) => {
	const result = [];
	indices.forEach(n => result.push(grid.flat()[n - 1]));
	return result.join("");
};

function highAndLow(numbers) {
	const arr = numbers.split(" ");
	const max = arr.reduce((a, b) => (Number(b) > Number(a) ? b : a));
	const min = arr.reduce((a, b) => (Number(b) < Number(a) ? b : a));
	return max + " " + min;
}

const reverseLetter = str =>
	str
		.replace(/[^a-z]/g, "")
		.split("")
		.reverse()
		.join("");

function twoOldestAges(ages) {
	const old = Math.max.apply(null, ages);
	const notSoOld = Math.max.apply(
		null,
		ages.filter(n => n != old)
	);
	return [notSoOld, old];
}

function matrixAddition(a, b) {
	for (let i = 0; i < a.length; i++) {
		for (let j = 0; j < a[i].length; j++) {
			a[i][j] += b[i][j];
		}
	}
	return a;
}

function beggars(values, n) {
	const result = new Array(n).fill(0);
	for (let j = 0; j < n; j++) {
		for (let i = j; i < values.length; i += n) {
			result[j] = result[j] ? result[j] + values[i] : 0 + values[i];
		}
	}
	return result;
}

function mirror(data) {
	if (data.length < 2) return data;
	const sorted = [...data].sort((a, b) => a - b);
	return [...sorted, ...sorted.reverse().slice(1)];
}

function solve5(arr) {
	if (arr.length < 2) {
		return arr;
	} else {
		const max = arr.sort((a, b) => b - a).shift();
		const min = arr.sort((a, b) => a - b).shift();
		return [max, min, ...solve5(arr)];
	}
}

const repeats = arr => arr.filter(n => arr.filter(el => el === n).length < 2).reduce((a, b) => a + b);

const removeConsecutiveDuplicates = s =>
	s
		.split(" ")
		.filter((w, i) => w !== s.split(" ")[i + 1])
		.join(" ");

function addArrays(array1, array2) {
	const sum = (Number(array1.join("")) + Number(array2.join(""))).toString().split("");
	if (sum[0] === "0") return [];
	if (sum.length < 2) return Number(sum);
	const first = sum.shift();
	if (first === "-") {
		sum[0] = "-" + sum[0];
		return sum.map(n => Number(n));
	} else {
		return [first, ...sum].map(n => Number(n));
	}
}

const whatCentury = year => {
	const century = Math.ceil(year / 100);
	let teil = "";
	switch (century) {
		case 1:
		case 21:
			teil = "st";
			break;
		case 2:
		case 22:
			teil = "nd";
			break;
		case 3:
		case 23:
			teil = "rd";
			break;
		default:
			teil = "th";
	}
	return century + teil;
};

// https://www.codewars.com/kata/5a8d2bf60025e9163c0000bc/train/javascript
function solve6(arr) {
	const uniqElements = arr.filter((e, i) => arr.indexOf(e) === i);
	const subArrays = uniqElements.map(e => arr.filter(el => el === e));
	const sortedSubArrays = subArrays.sort((a, b) => a - b || b.length - a.length);
	const flatten = list => {
		const newList = [];
		list.forEach(element => (Array.isArray(element) ? newList.push(...flatten(element)) : newList.push(element)));
		return newList;
	};
	const result = flatten(sortedSubArrays);
	return result;
}

const test = solve6([5, 9, 6, 9, 6, 5, 9, 9, 4, 4]);
console.log(test);
