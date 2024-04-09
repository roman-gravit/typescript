test("union-intersection", () => {


	// INtersection
	{
		type Cat = {
			name: string, 
			purrs: boolean
		}
		
		type Dog = {
			name: string, 
			barks: boolean, 
			wags: boolean
		}

		type CatAndDog = Cat & Dog;

		function _TestInetrsection(cat_and_dog: CatAndDog): void {
			console.log(cat_and_dog);
		}
	
		_TestInetrsection({name: "catanddog", purrs: true, wags: true,  barks: true});
		// any other: error
		// Error: _TestInetrsection({name: "cat", purrs: true});
		// Error: _TestInetrsection({name: "dog", wags: true,  barks: true});
		// Error: _TestInetrsection({name: "mix", purrs: true, barks: true});
		// Error: _TestInetrsection({name: "mix", purrs: true, wags: true});
	}

	// Union
	{
		type Cat = {
			name: string, 
			purrs: boolean
		}
		
		type Dog = {
			name: string, 
			barks: boolean, 
			wags: boolean
		}
	
		// Union -  represents a value that can have any of the types in the union
		type CatOrDogOrBoth = Cat | Dog;
	
		function _TestUnion(cat_or_dog: CatOrDogOrBoth): void {
			console.log(cat_or_dog);
		}
	
		const cat: Cat = {name: "cat", purrs: true};
		_TestUnion(cat);

		const dog: Dog = {name: "dog", barks: true, wags: true};
		_TestUnion(dog);

		const mix: CatOrDogOrBoth = {name: "mix", purrs: true, barks: true};
		_TestUnion(mix);

		const mix1: CatOrDogOrBoth = {name: "mix", purrs: true, wags: true};	
		_TestUnion(mix1);

		const mix2: CatOrDogOrBoth = {name: "mix", purrs: true, wags: true,  barks: true};	
		_TestUnion(mix2);
		// Error: _TestUnion({name: "cat", barks: true});
		// Error: _TestUnion({name: "cat"});
		// Error: _TestUnion({purrs: true, wags: true,  barks: true});
	}

});