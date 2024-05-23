### slice is a method that can be called on both strings and arrays 
- it has different behavior depending on whether it's called on an array or a string.
- When called on an array, slice returns a shallow copy of a section of the array.
- But when called on a string, slice returns a substring, which is a section of the string. 
---
### map() method
- Calls a provided callback function on each element of the original array.
- Transforms each element according to the logic in the callback function.
- Returns a new array containing the transformed elements.
- Does not modify the original array.
---
### filter() method
- Returns the elements of an array that meet the condition specified in a callback function.
---
### map vs filter
- filter() callback returns a boolean value (true or false)
- map() callback returns a value that replaces the original element
---
### forEach() method
-  iterate over the array
- Performs the specified action for each element in an array.
- Modifies the original array (if the callback function mutates it)
- Returns undefined (no return value)
---
### forEach vs Map
- forEach is like a "do" operation (execute a task for each element)
- map is like a "transform" operation (convert each element into something new)
---
### Array object has several static methods:
- Static methods belong to the class itself, not to any specific instance (object).
- They operate at the class level and can be called directly on the class without creating an instance.
- These methods are called directly on the Array constructor itself, rather than on an instance of an array.
- Static methods can be called without creating an instance of the class. This is useful when a method doesn’t require an object and can be used directly.
---
### Constrctor
Constructors are used to initialize instances (objects) of a class.
When you create an object using the new keyword, the constructor runs to set up the object’s initial state.
For instance, when you create an array using new Array(), the constructor initializes the array.
### Static Methods and Arrays:
In TypeScript, static methods are indeed called directly on the Array constructor itself.
You can use static methods like Array.isArray() without creating an array instance.

static methods are called directly on the constructor function itself, without creating an instance of the class. For example, if you have an Array constructor, you can call static methods like Array.from(), Array.isArray(), or Array.of() without needing to create an actual array instance.

