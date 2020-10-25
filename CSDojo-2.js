// function has to evaluate factorial on an integer >= 0
// n! = n(n-1)  if (n>0)  and = 1 if (n=0)
const fact1 = (n) => {
	if (n < 0) return;
	return n === 0 ? 1 : n * fact1(n - 1);
};

// function has to evaluate factorial on an integer >= 0
// n! = n(n-1)  if (n>0)  and = 1 if (n=0)
const fact2 = (n) => {
	if (n < 0) return;
	return n > 0 ? n * fact2(n - 1) : 1;
};

const answer1 = fact1(3);
const answer2 = fact2(3);

console.log(answer1);
console.log(answer2);
