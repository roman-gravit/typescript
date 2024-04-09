import * as matchers from 'jest-extended';
expect.extend(matchers);


//  <InstanceType>
// 
test("utility", () => {

	// <Readonly>  
	// Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.
	{

		interface Point {
			x: number;
			y: number;
		}
		  
		// { readonly x: number; readonly y: number; }
		let readonlyPoint: Readonly<Point> = {
			x: 10,
			y: 20
		}

		console.log(readonlyPoint);

		// Error: Cannot assign to 'x' because it is a read-only property.
		//readonlyPoint.x = 30;
	}

	//  <Required>
	//  Constructs a type consisting of all properties of Type set to required. The opposite of Partial.
	{

		interface Point {
			x?: number;
			y: number;
		}
		  
		const obj: Point = { y: 5 };
		expect(obj).toEqual({y:5});

		// Error: Property 'x' is missing in type '{ y: number; }' but required in type 'Required<Point>'.
		//const obj2: Required<Point> = { y: 5 };
	}

	//  <Partial>
	//  Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.
	{

		interface Todo {
			x: number;
			y: number;
		}
		   
		function test_partial(todo: Todo, partial: Partial<Todo>) {
			expect(todo).toEqual({x:5, y: 10});
			expect(partial).toEqual({y:1});
		}
		   
		const todo_all: Todo= {
			x: 5,
			y: 10
		};
		   
		const todo_partial:  Partial<Todo> = {
			y: 1
		};

		test_partial(todo_all, todo_partial);
	}

	//  <NonNullable>
	//  Constructs a type by excluding null and undefined from Type.
	{

		type T0 = string | null | undefined;

		function test_0(value: T0) {
			expect(value).toBeOneOf ([null, undefined, expect.any(String)]);
		}

		test_0(null);
		test_0(undefined);
		test_0("10");
		// Error: number
		//test_0(10);

		type T1 = NonNullable<string | null | undefined>;

		function test_1(value: T1) {
			expect(value).toBeOneOf ([expect.any(String)]);
		}

		// Error: null, undefined
		//test_1(null);
		//test_1(undefined);
		test_1("10");
		
	}

	//  <Record>
	//  Constructs an object type whose property keys are Keys and whose property values are Type. 
	//  This utility can be used to map the properties of a type to another type.
	{

		type Keys = "a" | "b" | "c";
		type RecordType = Record<Keys, number>;

		let record: RecordType = {
			a: 10, 
			b: 20, 
			c: 30,
			// error
			// d: 40 
		}

		expect(record).toEqual({a:10, b: 20, c: 30});


		type KeysNumber = 1 | 2 | 3;
		type RecordTypeNumber = Record<KeysNumber, string>;

		let record1: RecordTypeNumber = {
			1: "z", 
			2: "s",
			3: "xx",

			// error
			// 40: "sss" 
		}
		expect(record1).toEqual({1:"z", 2:"s", 3:"xx"});
	}

	//  Pick<Type, Keys> 
	//  Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.
	{

		interface Person {
			name: string;
			age: number;
			familyName: string;
		}
		  
		let person: Person = {
			name: "A",
			age: 25,
			familyName: "B"		
		}
		expect(person).toEqual({name:"A", age:25, familyName:"B"});

		let person_pick: Pick<Person, "name" | "age"> = {
			name: "A",
			age: 25,

			//  Error: 'familyName' does not exist in type 'Pick<Person, "name" | "age">
			// familyName:"B"
		}
		expect(person_pick).toEqual({name:"A", age:25});

	}

	// Omit<Type, Keys> 
	//   Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). 
	//   The opposite of Pick.
	{

		interface Person {
			name: string;
			age: number;
			familyName: string;
		}
		  
		let person: Person = {
			name: "A",
			age: 25,
			familyName: "B"		
		}
		expect(person).toEqual({name:"A", age:25, familyName:"B"});

		let person_omit: Omit<Person, "name" | "age"> = {
			familyName: "B"	

			//  Error: 
			// name: "A",
			// age: 25,
		}
		expect(person_omit).toEqual({familyName:"B"});

	}

	//  Exclude<UnionType, ExcludedMembers>
	//  Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers
	//  Exclude types from the Union
	{

		type A = string | number | boolean;

		function test_0(value: A) {
			expect(value).toBeOneOf ([expect.any(Boolean), expect.any(Number), expect.any(String)]);
		}

		test_0(10);
		test_0(true);
		test_0("10");
		// Error: Argument of type 'number[]' is not assignable to parameter of type 'A'.
		//test_0([1]);

		type B = Exclude<A, string>;

		function test_1(value: B) {
			expect(value).toBeOneOf ([expect.any(Boolean), expect.any(Number)]);
		}

		test_1(10);
		test_1(true);
		// Error: Argument of type 'string' is not assignable to parameter of type 'B'.
		// test_1("10");

	}

	//  Extract<Type, Union>
	//  Constructs a type by extracting from Type all union members that are assignable to Union.
	{
		type A = string | number | boolean;

		function test_0(value: A) {
			expect(value).toBeOneOf ([expect.any(Boolean), expect.any(Number), expect.any(String)]);
		}

		test_0(10);
		test_0(true);
		test_0("10");
		// Error: Argument of type 'number[]' is not assignable to parameter of type 'A'.
		//test_0([1]);

		type B = Extract<A, string>;

		function test_1(value: B) {
			expect(value).toBeOneOf ([expect.any(String)]);
		}

		test_1("10");
		// Error: Argument of type 'boolean' or 'number' is not assignable to parameter of type 'B'.
		// test_1(10);
		// test_1(true);
	}

	//  Parameters<Type>
	//  Constructs a tuple type from the types used in the parameters of a function type Type.
	//  For overloaded functions, this will be the parameters of the last signature; see Inferring Within Conditional Types.
	{

		type T0 = Parameters<() => string>;
		const param: T0 = [];

		type T1 = Parameters<(s: string) => void>;
		const param1: T1 = ["22"];

		type T2 = Parameters<<T>(arg: T) => T>;
		const param2: T2 = ["22"];

		type T4 = Parameters<any>;	
		const param4: T4 = ["22"];		 

	}

	//  ReturnType<Type>
	//  Constructs a type consisting of the return type of function Type.
	{

		type T0 = ReturnType<() => string>;
		const param: T0 = "str";

		type T1 = ReturnType<(s: string) => void>;
		function _test(): T1 {
			//
		}

	
		type T2 = ReturnType<<T>() => T>;
		const param2: T2 = "str";	 // unknown

		type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
		const param3: T3 = []; 

	}


});