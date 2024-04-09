test("interface", () => {


	// Interface, Object literal and inheritence
	{
		// interface can be used in implements and extends
		interface User {
			name: string;
			age: number;
			readonly pwd: string;
			// can add any property
			[propName: string]: any;
		}

		interface Actions {
			print(): string;
		}

		const user: User & Actions = {
			name: "Mike",
			age: 30,
			pwd: "qwetry",
			nickName: "Nick",

			print(): string {
				return `${this.name}, pwd: ${this.pwd}, nick:${this.nickName}`;
			}
		}

		// error: readonly
		//user.pwd = "qwerty1";
		console.log(user.print());

	}

	// Interface, Object literal and inheritence. Part 2
	{

		interface User {
			name: string;
			age: number;
		}


		// Object literal may only specify known properties, and 'nick' does not exist in type 'User'.
		const user: User = {
			name: "Mike",
			age: 30,

			// Error: there is no nick  property in User interface
			// nick: "test",
		}

		console.log(user);
	}

	// Interface extends
	{
		interface User {
			name: string;
			age: number;
		}

		interface Actions {
			print(): string;
		}

		// Class can add its own properties
		class Admin implements User, Actions {
			name: string = "Mike";
			age: number = 30;

			// NO Error: class must implememt interface AND can add its own properties
			nick: string = "NickName";

			print(): string {
				return `${this.name}, age: ${this.age}, nick:${this.nick}`;
			}
		}

		const admin = new Admin();
		console.log(admin);
	}

	{
		interface User {
			name: string;
			age: number;
		}

		interface Actions {
			print(): string;
		}

		interface AdminWithActions extends User, Actions {
			salary: number;
		}

		// Class can add its own properties
		class Admin implements AdminWithActions {
			name: string = "Mike";
			age: number = 30;
			salary: number = 1000;
			// NO Error: class must implememt interface AND can add its own properties
			nick: string = "NickName";

			print(): string {
				return `${this.name}, age: ${this.age}, nick:${this.nick}`;
			}
		}

		const admin = new Admin();
		console.log(admin);
	}


});