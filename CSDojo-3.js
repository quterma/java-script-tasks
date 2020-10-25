// function get a n - positive integer > 1 and return a number from a Fibonacchi sequence (1,1,2,3,5,8...) with a n - index of sequence
// (0) 1 1 2 3 5 8 ... (a,b,c where c = a+b)
const Fib = (n) => {
	return n >= 3 ? Fib(n - 1) + Fib(n - 2) : 1;
};

console.log(Fib(1));
console.log(Fib(2));
console.log(Fib(3));
console.log(Fib(4));
console.log(Fib(5));
console.log(Fib(6));
console.log(Fib(7));
