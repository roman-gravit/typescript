test("generic", () => {

	// type control will lost with any
	{
		const getter = (data: any): any => {console.log(data); return data;};

		getter(10);
		getter("20");
		getter([1, 2, 3]);

		getter(10).length;  // undefined
	}

	// Generic expression
	{
		const getter = <T>(data: T): T => {console.log(data); return data;};

		getter(10);
		getter("20");
		getter([1, 2, 3]);

		// Compile error!
		//getter(10).length;
	}

	// Generic declaration
	{
		function getter<T>(data: T): T {
			console.log(data); 
			return data;
		}

		getter<number>(10);
		
		// Error!
		//getter<number>("20");

		getter([1, 2, 3]);

		// Compile error!
		//getter(10).length;
	}

	// generic classes
	{
		class User<S, N> {
			name: S;
			age: N;

			constructor(name: S, age: N) {
				this.name = name;
				this.age = age;
			}

			toString(): string {
				return `Name: ${this.name} age:${this.age}`;
			}
		}

		const user = new User("Mike", 30);
		console.log(user.toString());

		const user1 = new User("Mike", "30");
		console.log(user1.toString());

	}

	// generic extends
	{
		class User<S, N extends number> {
			name: S;
			age: N;

			constructor(name: S, age: N) {
				this.name = name;
				this.age = age;
			}

			toString(): string {
				return `Name: ${this.name} age:${this.age}`;
			}
		}

		const user = new User("Mike", 30);
		console.log(user.toString());

		// will be error: because Age must be number
		//const user1 = new User("Mike", "30");
		//console.log(user1.toString());

	}


});