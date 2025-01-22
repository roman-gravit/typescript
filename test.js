if(true) {
	console.log("start");

	const promise2 = new Promise((resolve) => {
		console.log("promise2 executor->", this)
		resolve("value2")
	});
	console.log("promise2:", promise2.state)
	promise2.then((value) => {
		console.log("promise2 THEN:", value, promise2.state)
	})

	const promise4 = Promise.resolve("value4");
	console.log("promise4:", promise4.state)
	promise4.then((value) => {
		console.log("promise4 THEN:", value, promise4.state)
	})

	console.log("end");
}


if(false) {
	const data = { name: "Mark", age: 50 };

	const person = new Proxy(data, {
		get(obj, property) {
			console.log("proxy.get ->", property);
			return obj[property];
		},
		set(obj, property, value) {
			console.log("proxy.set ->", property, value);
			obj[property] = value;
			return false;
		}
	});
	
	console.dir({ "person.name": person.name });
	console.dir({ "person.age": person.age });
	console.dir({ "person.proto": person.__proto__ });
	
	person.name = "Mark II";
	console.dir({ "person.name": person.name });
}

if(false) {
	function Sort(numbers) {
		if(numbers.length < 2) {
			return numbers;
		}
	
		const pivot = Math.floor(numbers.length/2);
		const middle = numbers[pivot];
		const left = [];
		const right = [];
	
		for(const num of numbers) {
			if(num < middle) {
				left.push(num);
			} else if(num > middle) {
				right.push(num);
			}
		}
	
		return [...Sort(left), middle, ...Sort(right)]
	}
	
	
	console.log(Sort([1, 3, 4, 6, 2, 5, 8, 0]))
}


if(false) {
	class MinStack {
		stack = [];
		minim = [];
		pop() {
			this.minim.pop();
			return this.stack.pop();
		}

		push(value) {
			if(!this.minim.length) {
				this.minim.push(value);
			} else {
				const last = this.minim.at(-1);
				if(value < last) {
					this.minim.push(value);
				} else {
					this.minim.push(last);
				}
			}
			this.stack.push(value);
		}

		getMin() {
			return this.minim.at(-1);
		}	
	}

	const stack = new MinStack();
	stack.push(4);
	stack.push(1);
	stack.push(2);
	stack.push(3);
	console.log(stack.getMin());
	stack.push(0);
	console.log(stack.getMin());
	stack.pop();
	console.log(stack.getMin());

}
/*
const fn = async (n) => {
	await new Promise(res => setTimeout(res, 100));
	return n * n;
}
  
function asyncLimit(fn, limit) {
	return async function(n) {
		return Promise.race([fn(n), 
			new Promise((_, reject) => {
				setTimeout(() => { reject("limit")}, limit)
			})])
	}
}


(async () => {
	const res = await asyncLimit(fn, 150)(5) //resolved 25
	console.log(res);
	
	try {
		await asyncLimit(fn, 50)(5) //rejected
	} catch(e) {
		console.log(e);
	}

})();

*/

// curry
if(false) {
	function curry(fn) {
		return function rest(...args) {
			if(args.length >= fn.length) {
				return fn(...args);
			}
			return rest.bind(this, ...args);
		}
	}

	function sum3(a, b, c) {
		return a + b + c;
	}

	const a1 = curry(sum3);
	console.log(a1(1));
	console.log(a1(1)(2));
	console.log(a1(1)(2)(3));
	console.log(a1(1, 2)(3));
	console.log(a1(1)(2, 3));
}

// Partial
if(false) {
	function partial(func, ...args1) {
		return function inner(...args2) {
			return func(...args1, ...args2);
		}
	}

	function sum4(a, b, c, d) {
		return a + b + c + d;
	}

	const a1 = partial(sum4, 10);
	console.log(a1(2,3,4))

	const a2 = partial(sum4, 1, 2);
	console.log(a2(3,4))
}

if(false) {
	function Test() {
		//
	}
	const obj = new Test();
	console.log(obj.__proto__); //[[Prototype]]
	console.log(Test.prototype); //[[Prototype]]
	console.log(Test.prototype === obj.__proto__);
	console.log(typeof Test);
}

if(false) {

function curry(func) {
	return function inner(...args) {
		if(args.length >= func.length) {
			return func(...args);
		}
		return inner.bind(null, ...args)
	}
}

function sum(a, b, c) {
	return a + b + c; 
}

const currySum = curry(sum);
const res = currySum(1, 2, 3);
console.log("------");
console.log(res);
console.log("------");
const res1 = currySum(1);
const res2 = res1(2);
const res3 = res2(3);
console.log(res1, res2, res3);
}

if(false) {
	class Class1 { }
	function Func1() { }
	const obj1 = { };
	const objClass = new Class1();
	const arr1 = [];
	const date1 = new Date();

	// .prototype 
	console.log("CLASS: .prototype:", Class1.prototype, typeof Class1.prototype, Class1.prototype.constructor);  // object  {constructor: class Class1{}}
	console.log("FUNC: .prototype:", Func1.prototype, typeof Func1.prototype, Func1.prototype.constructor);  // object  {constructor: f Func1()}
	console.log("OBJ_LIT: .prototype:", obj1.prototype);  // UNDEFINED
	console.log("OBJ_NEW: .prototype:", objClass.prototype);  // UNDEFINED
	console.log("ARR: .prototype:", arr1.prototype);  // UNDEFINED
	console.log("Date: .prototype:", date1.prototype);  // UNDEFINED

	console.log("-----------------------");
	console.log("CLASS: __proto__:", Class1.__proto__, typeof Class1.__proto__ );  // function f()
	console.log("FUNC: __proto__:", Func1.__proto__, typeof Func1.__proto__ );  // function f()
	console.log("OBJ: __proto__:", obj1.__proto__, typeof obj1.__proto__ );  // object
	console.log("OBJ_NEW: __proto__:", objClass.__proto__, typeof objClass.__proto__ );  // object
	console.log("ARR: __proto__:", arr1.__proto__, typeof arr1.__proto__ );  //  []
	console.log("Date: __proto__:", date1.__proto__, typeof date1.__proto__ );  //  {}


	const a = null ?? "right";
	const b = "left" ?? "right";
	console.log(a, b);

	const obj = { duration: "left", title: ""};
	obj.duration ||= "right";
	obj.title ||= "right";
	console.log(obj);
}


