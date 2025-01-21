if(true) {

	TEST(is("string", "other"), false);
	TEST(is(true, false), false);
	TEST(is(42, 42), true);
	TEST(is(42, 42, 22), false);
	TEST(is(42, 42, 42), true);

	// @ts-expect-error
	TEST(is(10, "foo"), false);

	TEST(is([1], [1, 2], [1, 2, 3]), false);

	function is<T>(param: T, ...rest: T[]): boolean {
		return rest.every(elem => elem === param);

	}

	function TEST(result: boolean, tested: boolean) {
		console.log(result === tested ? "+" : "Failed");
	}
}

// call
if(false) {

	function call<T extends [unknown, string, ...unknown[]], R>(f: (...args: T) => R, ...args: T): R {
		return f(...args);
	} 

	console.log(call(add, "a", "v"));
	console.log(call(add2, 2, "a"));

	function add(a: string, b: string): string {
		return a + b;
	}

	function add2(a: number, b: string): string {
		return String(a) + b;
	}

}

// function overload
if(false) {
	type Reservation = {};
	type Reserve = {
		(from: Date, to: Date, destination: string): void
		(from: Date, destination: string): void
		(destination: string): void
	}

	const reserve: Reserve = 
			(from: Date | string, to?: Date | string, destination?: string) => 
	{
		if(typeof from === "string" && to === undefined && destination===undefined) {
			console.log("Only destination ", from, to, destination);
		}else if(to instanceof Date && destination!==undefined) {
			console.log("All 3 parameters", from, to, destination);
		} else if (destination===undefined){
			console.log("To is missed", from, to, destination);
		}

		
	}

	console.log(reserve(new Date(), new Date(), "Bali"));
	console.log(reserve(new Date(), "Bali"));
	console.log(reserve("Bali"));

	// 2
	function reserve2(from: Date, to: Date, destination: string): Reservation
	function reserve2(from: Date, to: undefined, destination: string): Reservation
	function reserve2(from: undefined, to: undefined, destination: string): Reservation
	function reserve2(from: Date| undefined, to: Date | undefined, destination: string): Reservation {
		console.log("2: ", from, to, destination);
		return {} as Reservation;
	}

	console.log(reserve2(new Date(), new Date(), "Bali"));
	console.log(reserve2(new Date(), undefined, "Bali"))
}

// map
if(false) {
	type map = {
		<T, U>(array: T[], func: (item: T) => U): U[]
	}
	
	const test1: map = <T, U>(array: T[], func: (item: T) => U): U[] => {
		const result: U[] = [];
		for(const item of array) {
			result.push(func(item));

		}	
		return result;
	}
	
	const itemsN: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8];
	
	function map1(num: number): number {
		return num + 1;
	}
	
	function map2(num: number): string {
		return String(num);
	}

	const itemsS: string[] = [ "a", "ab", "b", "aaa"];
	
	function map3(s: string): string {
		return s.toUpperCase();
	}
	
	console.log("Map1:", test1(itemsN, map1));
	console.log("Map2:", test1(itemsN, map2));
	console.log("Map3:", test1(itemsS, map3));
}

// filter 
if(false) {
	type filter = {
		<T>(array: T[], func: (item: T) => boolean): T[]
	}
	
	const test1: filter = <T>(array: T[], func: (item: T) => boolean): T[] => {
		const result = [];
	
		for(const item of array) {
			const predicate = func(item);
			if(predicate) {
				result.push(item);
			}
		}
	
		return result;
	}
	
	const itemsN: number[] = [ 1, 2, 3, 4, 5, 6, 7, 8];
	
	function predicateN(num: number): boolean {
		return num % 2 === 0;
	}
	
	const itemsS: string[] = [ "a", "ab", "b", "aaa"];
	
	function predicateS(s: string): boolean {
		return s.startsWith("a");
	}
	
	console.log("Filter1:", test1(itemsN, predicateN));
	console.log("Filter2:", test1(itemsS, predicateS));
}

