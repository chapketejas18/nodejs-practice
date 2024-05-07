### Typescript

TypeScript is an open-source pure object-oriented programing language. It is a strongly typed superset of JavaScript which compiles to plain JavaScript. It contains all elements of the JavaScript. It is a language designed for large-scale JavaScript application development, which can be executed on any browser, any Host, and any Operating System. The TypeScript is a language as well as a set of tools. TypeScript is the ES6 version of JavaScript with some additional features.

TypeScript cannot run directly on the browser. It needs a compiler to compile the file and generate it in JavaScript file, which can run directly on the browser. The TypeScript source file is in ".ts" extension. We can use any valid ".js" file by renaming it to ".ts" file. TypeScript uses TSC (TypeScript Compiler) compiler, which convert Typescript code (.ts file) to JavaScript (.js file).

### Data Types

1) Boolean: Represents a logical value indicating true or false.
2) Number: Represents both integer and floating-point numbers.
3) String: Represents a sequence of characters.
4) Array: Represents a list of elements of a particular type.
5) Tuple: Represents an array with a fixed number of elements whose types are known, but need not be the same.
6) Enum: A way of giving more friendly names to sets of numeric values.
7) Any: Represents a value of any type. Use it when you don't want to specify a particular type.
8) Void: Represents the absence of a type, typically used as the return type of functions that do not return a value.
9) Null and Undefined: Have their own types named null and undefined respectively.
10) Never: Represents the type of values that never occur (e.g., a function that always throws an error or never returns).

## Advantage of TypeScript over JavaScript :

TypeScript always highlights errors at compilation time during the time of development, whereas JavaScript points out errors at the runtime.
TypeScript supports strongly typed or static typing, whereas this is not in JavaScript.
TypeScript runs on any browser or JavaScript engine.
Great tooling supports with IntelliSense, which provides active hints as the code is added.
It has a namespace concept by defining a module.

## Disadvantage of TypeScript over JavaScript :

TypeScript takes a long time to compile the code.
TypeScript does not support abstract classes.
If we run the TypeScript application in the browser, a compilation step is required to transform TypeScript into JavaScript.

### Typescript Classes

A class definition can contain the following properties:
1) Fields: It is a variable declared in a class.
2) Methods: It represents an action for the object.
3) Constructors: It is responsible for initializing the object in memory.
4) Nested class and interface: It means a class can contain another class.

TypeScript is an Object-Oriented JavaScript language, so it supports object-oriented programming features like classes, interfaces, polymorphism, data-binding, etc. JavaScript ES5 or earlier version did not support classes. TypeScript support this feature from ES6 and later version. TypeScript has built-in support for using classes because it is based on ES6 version of JavaSript. Today, many developers use class-based object-oriented programming languages and compile them into JavaScript, which works across all major browsers and platforms.

A class creates an object by using the new keyword followed by the class name. The new keyword allocates memory for object creation at runtime. All objects get memory in heap memory area.

A class can control the visibility of its data members from the members of the other classes. This capability is termed as encapsulation or data-hiding. OOPs uses the concept of access modifier to implement the encapsulation. The access modifier defines the visibility of class data member outside its defining class. TypeScript supports the three types of access modifier. These are: Public, Private, Protected