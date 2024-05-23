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

