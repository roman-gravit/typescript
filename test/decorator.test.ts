import 'reflect-metadata';

// Decorator is some kind of function which wraps the entity and modifies this entity.

test("decorator", () => {

	// class decorator
	{

		// class decorator must have single argument: constructor of the class
		const logClass = (constructor: Function) => {
			console.log("ctor:" + constructor);
			//result of call: class User{}
		};

		// apply decorator to class
		@logClass
		class User {
			name: string;
			age: number;
			constructor(name: string, age: number ) {
				this.age = age;
				this.name = name;
			}

			getPass(): string {
				return `${this.name}${this.age}`;
			}
		}

		const user = new User("Mike", 30); 
		const str = user.toString();
		console.log(str);
	}

	// property 
	{

		function Age(from: number, to: number) {
			return function (object: Object, propertyName: string) {
				const metadata = {
					propertyName: propertyName,
					range: { from, to },
				};
				Reflect.defineMetadata(`validationMetadata_${propertyName}`, metadata, object.constructor);
			};
		}

		class User {


			name: string;
			@Age(18, 60)
			age: number;
			constructor(name: string, age: number ) {
				this.age = age;
				this.name = name;
			}

			getPass(): string {
				return `${this.name}${this.age}`;
			}
		}

		const user = new User("Mike", 70); 

	}


});