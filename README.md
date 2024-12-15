## Typescript

###  History

- TypeScript 1.0: was released at Microsoft's Build developer conference in 2014

- TypeScript 2.0: September 2016

- TypeScript 3.0: 30 July 2018

- TypeScript 4.0: 20 August 2020

- TypeScript 5.0: 16 March 2023


https://www.typescriptlang.org/docs/handbook/release-notes/typescript-5-3.html


###  Basic types is TypeScript

   - any:     These may occur for values from code that has been written without TypeScript or a 3rd party library.
              Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist. 
              These properties include functions and TypeScript will not check their existence or type.
              Disables type checking and effectively allows all types to be used.

   - unknown: supertype of any other type
              We may need to describe the type of variables that we do not know when we are writing an application.

   - never:   indicates the values that will never occur. Function throw error or endless loop.
              BUT can help to catch errors during compile time.

   - boolean: true/false
   
   - number:  6   7.10   0xf00d   0b1010   0o744  
   
   - string:  or template string
   
   - null:    null absence of the object (typeof  = "object" in javascript)
   
   - undefined:  undefined means that variable was declared but not initialized
   
   - void:  represents the absence of any type, typically used for functions that don’t return a value. 
            The void type can have undefined as a value where as never cannot have any value.
   
   - Array:  typeof  = "object"
   
   - Tuple:  A tuple is a typed array with a pre-defined length and types for each index

   - Enum:  is a special "class" that represents a group of constants (unchangeable variables).
            string 
            number (by default starts from 0) 
            Entity which helps you to improve structure of your code.
   
   - object:  typeof  = "object"

   - BigInt 

   - Symbol: symbol is a primitive data type, just like number and string. Symbols are immutable, and unique.
             Just like strings, symbols can be used as keys for object properties.


   https://habr.com/ru/sandbox/211287/  [2024]


###  Composing Types

	```
	type Cat = {
		name: string, 
		purrs: boolean
	}
    
	type Dog = {
		name: string, 
		barks: boolean, 
		wags: boolean
	}

	```

  - Union:   represents a value that can have any of the types in the union
    		 type CatOrDogOrBoth = Cat | Dog

  - Intersection:   This means that data will only pass the type checker if it satisfies all the conditions of both types.
    				type CatAndDog = Cat & Dog


###  Type aliases

type Name = string;    => we can use now:  let name: Name = "Mike";  

```
type Age = number;
 
type userData = {
    username: string, 
    points: number,
    age?: number
};
```

As for let and const it is block scoped.


###  Generics

Generics are code templates that you can define and reuse throughout your codebase. 
They provide a way to tell functions, classes, or interfaces what type you want to use when you call it.

	```
	function getter<T>(data: T): T {
		console.log(data); 
		return data;
	}
	
	```

###  Utility Types

Utility types in Typescript are some predefined generic types that can be used to manipulate or create other new types.

```
- **Readonly<Type>** [TS 2.1] : Constructs a type with all properties of Type set to readonly, meaning the properties of the constructed type cannot be reassigned.

- **Required<Type>** [TS 2.8] : Constructs a type consisting of all properties of Type set to required. The opposite of Partial.

- **Partial<Type>** [TS 2.1] : Constructs a type with all properties of Type set to optional. This utility will return a type that represents all subsets of a given type.

- **NonNullable<Type>** [TS 2.8] : Constructs a type by excluding null and undefined from Type.

- **Record<Keys, Type>** [TS 2.1] :  Constructs an object type whose property keys are Keys and whose property values are Type. 
                                     This utility can be used to map the properties of a type to another type.

- **Pick<Type, Keys>** [TS 2.1] : Constructs a type by picking the set of properties Keys (string literal or union of string literals) from Type.

- **Omit<Type, Keys>** [TS 3.5] : Constructs a type by picking all properties from Type and then removing Keys (string literal or union of string literals). 
                                  The opposite of Pick.

- **Exclude<UnionType, ExcludedMembers>** [TS 2.8] : Constructs a type by excluding from UnionType all union members that are assignable to ExcludedMembers

- **Extract<Type, Union>** [TS 2.8] : Constructs a type by extracting from Type all union members that are assignable to Union.

- **Parameters<Type>**  [TS 3.1]  : Constructs a tuple type from the types used in the parameters of a function type Type.
                                     For overloaded functions, this will be the parameters of the last signature; see Inferring Within Conditional Types.

- **ConstructorParameters<Type>**  [TS 3.1]  : Constructs a tuple or array type from the types of a constructor function type. 
                                               It produces a tuple type with all the parameter types (or the type never if Type is not a function).

- **ReturnType<Type>** [TS 2.8] : Constructs a type consisting of the return type of function Type.
                                  For overloaded functions, this will be the return type of the last signature; see Inferring Within Conditional Types.
              
- **InstanceType<Type>** [TS 2.8] : Constructs a type consisting of the instance type of a constructor function in Type.

```

###  Decorators

Decorators provide a way to add both annotations and a meta-programming syntax for class declarations and members.

To enable experimental support for decorators, you must enable the experimentalDecorators compiler option either on the command line or in your tsconfig.json.

A Decorator is a special kind of declaration that can be attached to:

 - class declaration
 
 - method
  
 - accessor
 
 - property
 
 - parameter 

Decorators use the form @expression, where expression must evaluate to a function that will be called at runtime with information about the decorated declaration.

For example, given the decorator @sealed we might write the sealed function as follows:

    ```
    function sealed(target) {
        // do something with 'target' ...
    }

    ```
