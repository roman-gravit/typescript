test("classes", () => {

	// property visibility modifiers
	{

		// Four main visibility modifiers in TypeScript.
		//  - public (default)
		//  - private:    its not visible outside class 
		//  - protected:  visible within class and its subclasses 
		//  - reaadonly:  read-only

		class User {
			public name: string;

			// Property 'age' is protected and only accessible within class 'User' and its subclasses.
			protected age: number;

			// its not visible outside class 
			private nickName: string;

			readonly password: string;

			constructor(name: string, age: number, pwd ="", nick = "") {
				this.name = name;
				this.age = age;
				this.nickName = nick;
				this.password = pwd;
			}

			toString(): string {
				return (`User name:${this.name}, age:${this.age}, nick:${this.nickName}, pwd:${this.password}`);
			}
		}

		class Admin extends User {
			public salary: number;

			constructor(name: string, age: number, salary: number) {
				super(name, age);
				this.salary = salary;
			}

			toString(): string {
				return (`Admin name:${this.name}, age:${this.age}, salary:${this.salary}`);
			}
		}

		const user = new User("Mike", 30, "qwerty", "Buddy");
		expect(user.name).toEqual("Mike");

		console.log(user.toString());
		user.name = "Mike1";
		expect(user.name).toEqual("Mike1");

		// Error: protected 
		// expect(user.age).toEqual(30);
		// Error: private 
		// expect(user.nickName).toEqual("Buddy");
		// Error: readonly 
		//user.password = "qwerty1";

		const admin = new Admin("John", 35, 1000);
		expect(admin.name).toEqual("John");
		expect(admin.salary).toEqual(1000);
		// Error: protected 
		//expect(admin.age).toEqual(35);
		console.log(admin.toString());
	}


	// Minimization of Class peoprties
	{

		class User {
			// NOTE: for each property visibility modifier MUST be set
			//  if not: error (Property <name> does not exist on type 'User')
			constructor(
				public name: string,
				private age: number,
				protected nickName: string,
				readonly password: string
			) {}

			toString(): string {
				return (`User name:${this.name}, age:${this.age}, nick:${this.nickName}, pwd:${this.password}`);
			}
		}

		const user = new User("Mike", 30, "qwerty", "Buddy");
		console.log(user.toString());
	}

	// Get/set accessors
	// To avoid repeating the check, you can use setters and getters. 
	// The getters and setters allow you to control access to the properties of a class.
	//  - A getter method returns the value of the property’s value. A getter is also called an accessor.
	//  - A setter method updates the property’s value. A setter is also known as a mutator.
	{

		class User {

			public name: string;

			private age: number;

			constructor(name: string, age: number) {
				this.name = name;
				this.age = age;
			}

			// need to have an option to change the age of the user

			// 1. via method
			SetAge(age: number): void {
				this.age = age;
			}

			// 2. via set accessor
			// You can validate the data before assigning it to the properties.
			set MyAge(age: number) {
				this.age = age;
			}


			toString(): string {
				return (`User name:${this.name}, age:${this.age}`);
			}
		}

		const user = new User("Mike", 30);
		expect(user.name).toEqual("Mike");
		expect(user.toString()).toEqual("User name:Mike, age:30");
		
		user.SetAge(31);
		expect(user.toString()).toEqual("User name:Mike, age:31");

		user.MyAge = 32;
		expect(user.toString()).toEqual("User name:Mike, age:32");
	}

	//TODO: Static


});