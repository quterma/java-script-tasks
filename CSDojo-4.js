// a frog can jump for 1 or 2 feet at once. How many ways there are for it to reach 11 feet (for example) long trip?
// distance should be positive integer
const frogWays = (distance) => {
	if (!Number.isInteger(distance)) return;
	return distance < 3 ? distance : frogWays(distance - 1) + (distance - 2);
};

console.log(frogWays(1));
console.log(frogWays(2));
console.log(frogWays(3));
console.log(frogWays(4));
console.log(frogWays(5));
console.log(frogWays(6));
