class NeverError extends Error {
	// если дело дойдет до вызова конструктора с параметром - ts выдаст ошибку
	constructor(value: never) {
		super(`Unreachable statement: ${value}`);
	}
}

function ThePowerOfNeverType(): void {

	// type AdminAction is declared somewhere else
	// Variant 1:
	// type AdminAction = "CREATE" | "ACTIVATE";
	// throw new Error("it should not happened");
	
	// Variant 2:
	// Somebody change AdminAction => added BLOCKED:
	// throw new Error  in RUNTIME!
	// throw new NeverError => COMPILE time
	type AdminAction = "CREATE" | "ACTIVATE" | "BLOCKED";

	class ActionEngine {
		doAction(action: AdminAction) {
			switch (action) {
				case "CREATE":
					console.log("CREATE");
					return "CREATED";
	
				case "ACTIVATE":
					console.log("ACTIVATE");
					return "ACTIVATED";
	
				default:
					// Var 1:  => error during runtime
					throw new Error("Этого не должно случиться");
					// Var 2:
				    // throw new NeverError(action);  => Error dirung compilation
					// or
					// const unknownAction: never = action;
			}
		}
	}
	
	const a1: ActionEngine = new ActionEngine();
	a1.doAction("BLOCKED");

}

function duplicate(arr: number[]): number[] {
	const len = arr.length;
	for(let i=0; i < len; i++) {
		arr.push(arr[i]);
	}
	return arr;
}

const a = [1,2,3,4,5];
duplicate(a)
console.log(a);

function test2(a: number, b: number, c: number): void {
	console.log(a, b, c);
}