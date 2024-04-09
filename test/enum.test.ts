test("any-unknown", () => {

	function test_any(arg: any): void {
		// it will be all compliled, but theer will be errors in run-time
		console.log(arg + 5);
		// here error: console.log(arg.charCodeAr(0));
		console.log({...arg});
	}	

	test_any(10);

	// need to use typecheck(type guards) before usong 
	function test_unknown(arg: unknown): void {
		if(typeof arg === "number") {
			console.log(arg + 5);
		}

		if(typeof arg === "string") {
			console.log(arg.charCodeAt(0));
		}
	}	

	test_unknown(10);
	test_unknown("10");

});


test("enum", () => {

	{
		// ****************************
		//     1. Enum number
		//  
		// will be transformed in map JS to:   
		//  let Color;  
		//  (function (Color) {
		//       Color[Color["Red"] = 0] = "Red";
		//       Color[Color["Blue"] = 1] = "Blue";
		//       Color[Color["Green"] = 2] = "Green";
		//  })(Color || (Color = {}));

		enum Color {
			Red,    // Default = 0, you can set 2...4.. 56
			Blue,   // you cna set any index
			Green
		}

		expect(Color.Blue).toEqual(1);
		expect(typeof Color.Blue).toEqual("number");
		expect(Color[1]).toEqual("Blue");
		expect(Color["Blue"]).toEqual(1);
		
		// We can call enum by index: Reverse enum
		expect(typeof Color[1]).toEqual("string");
	}

	{
		// ****************************
		//     2. Enum string
		//  
		// will be transformed in map JS to: 
		// string enum does NOT have number index!
		//   (function (Links) {
		//       Links["YouTube"] = "www.//yuotube.com";
		//       Links["Google"] = "www.//google.com";
		//       Links["Yahoo"] = "www.//yahoo.com";
		//   })(Links || (Links = {}));
		enum Links {
			YouTube = "www.//yuotube.com",    
			Google = "www.//google.com", 
			Yahoo = "www.//yahoo.com", 
		}

		expect(typeof Links.YouTube).toEqual("string");
		expect(Links.YouTube).toEqual("www.//yuotube.com");

		// !!! We can NOT call string enum by index
		//log(typeof Links[0]);     // string

	}

	{
		// ****************************
		//  3. const Enum  number
		//  will be NOT transformed in map JS to: 
		//  Only if this enum will be invoked in code
		const enum ColorConst{
			Red,    // Default = 0, you can set 2...4.. 56
			Blue,   // you cna set any index
			Green
		}

		// map JS:  if (0 /* ColorConst.Red */ === 0) {
		expect(ColorConst.Red).toEqual(0);

		// map JS: if (1 /* ColorConst.Blue */ === 1) {
		expect(ColorConst.Blue).toEqual(1);

		// !!! can NOT access by index
		//log(typeof ColorConst[1]);   
		//if(ColorConst[1]==="Blue") {
		//	log("Blue");
		//}
	}

	{	
		// ****************************
		//  4. const Enum  string
		//  will be NOT transformed in map JS to: 
		//  Only if this enum will be invoked in code
		const enum Links2 {
			YouTube = "www.//yuotube.com",    
			Google = "www.//google.com", 
			Yahoo = "www.//yahoo.com", 
		}

		// map JS :  if ("www.//yuotube.com" /* Links2.YouTube */ === "www.//yuotube.com") {
		expect(Links2.YouTube).toEqual("www.//yuotube.com");

	}

});
