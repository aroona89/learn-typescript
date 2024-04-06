/* Q#41
Magicians: Make an array of magician’s names. 
Pass the array to a function called show_magicians(), which prints the name of each magician in the array. */

let magicianNames: string[] = ["abc", "xyz", "unknown"]

function show_magicians(magicians: string[]) {
    for (const magician of magicians) {
        console.log(magician);
    }
}
show_magicians(magicianNames)


/* Q#42
Great Magicians: Start with a copy of your program from Exercise 41. 
Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to
each magician’s name. Call show_magicians() to see that the list has actually been modified. */

function make_great(magicians: string[]): string[] {
    let greatMagicianNames: string[] = []; // Create a new empty array
    for (const magician of magicians) {
        greatMagicianNames.push(`Great ${magician}`)
    }
    return greatMagicianNames // Return the new array with modifications
}
// let greatMagicianNames = make_great([...magicianNames]) // "spread syntax" or "spread operator" is used to create a shallow copy 
let greatMagicianNames = make_great(magicianNames.slice()) // Returns a copy of a section of an array.
show_magicians(greatMagicianNames)

/*Q#43
Unchanged Magicians: Start with your work from Exercise 42. 
Call the function make_great() with a copy of the array of magicians’ names. 
Because the original array will be unchanged, return the new array and store it in a separate array. 
Call show_magicians() with each array to show that you have one array of the original names and one 
array with the Great added to each magician’s name. */

// Create a copy of the original array
let greatAdded = make_great(magicianNames)
show_magicians(magicianNames)
show_magicians(greatAdded)
