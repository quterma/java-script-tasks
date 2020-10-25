// linked list: count the nodes quantity
class Node {
	constructor(data) {
		this.data = data;
	}
}

const n1 = new Node(1);
const n2 = new Node(2);
const n3 = new Node(3);
const n4 = new Node(4);
const n5 = new Node(5);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;

const measureTail = (node) => {
	if (!node) return; // check that we have at least 1 node (head)
	let current = node;
	let tailSize = 1; // if we have at least 1 node (head) the linked list size at least 1
	while (current.next) {
		tailSize += 1; // 2
		current = current.next;
	}
	return tailSize;
};
const result = measureTail(n1);
console.log(result);
