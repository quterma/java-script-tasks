const test = flatten([
	1,
	"any [complex] string",
	null,
	function () {},
	[1, 2, [3, "4"], 0],
	[],
	{ a: 1 },
]);
// возвращает
//      [1, 'any [complex] string', null, function() {}, 1, 2, 3, '4', 0, { a: 1 }]

function flatten(list) {
	const newList = [];
	list.forEach((element) =>
		Array.isArray(element)
			? newList.push(...flatten(element))
			: newList.push(element)
	);
	return newList;
}

// ? (newList = newList.concat(flatten(element)))
// ? newList.push(...flatten(element))
// const arrayFlatten = (arr)=>
// 	arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(arrayFlatten(val)) : acc.concat(val), []);

console.log(test);
