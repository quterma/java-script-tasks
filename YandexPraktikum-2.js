function get(obj, path, defaultValue) {
	let result = path
		.replace(/\[/g, ".")
		.replace(/\]/g, "")
		.replace(/^\./, "")
		.split(".")
		.reduce((prev, curr) => {
			return prev && prev[curr];
		}, obj);
	return result ? result : defaultValue;
}

const obj = {
	a: {
		b: {
			c: "d",
		},
		e: "f",
	},
};

let a = get(obj, "a.b"); // { c : 'd' }
let b = get(obj, "a.b.c"); // 'd'
let c = get(obj, "a.e"); // 'f'
let d = get(obj, "a.x.e"); // undefined
let e = get(obj, "a.x.e", true); // true
let f = get(obj, "a.x.e", "My default value"); // My default value

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);
// Напишите функцию get, которая получает объект и путь к вложенному свойству объекта
// и возвращает значение этого свойства(или undefined, если свойства не существует).
// 	Третий, опциональный аргумент функции — значение по умолчанию, которое возвращается,
// 		если значения по указанному пути не существует.
