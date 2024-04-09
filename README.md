## Typescript

### History

- TypeScript 1.0: was released at Microsoft's Build developer conference in 2014

- TypeScript 2.0: September 2016

- TypeScript 3.0: 30 July 2018

- TypeScript 4.0: 20 August 2020

- TypeScript 5.0: 16 March 2023


### Basic types is TypeScript

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


###   Type aliases

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


### Generics

Generics are code templates that you can define and reuse throughout your codebase. 
They provide a way to tell functions, classes, or interfaces what type you want to use when you call it.