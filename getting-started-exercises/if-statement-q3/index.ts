/* Q#29
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent
if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits. */
var favorite_fruits: Array<string> = ['banana', 'cherry', 'pineapple'];

/* • Write five if statements. Each should check whether a certain kind of fruit is in your array. 
If the fruit is in your array, the if block should print a statement, such as You really like bananas! */
if (favorite_fruits.includes("orange")) {
}
if (favorite_fruits.includes("banana")) {
    console.log("I really like Bananas!")
}
if (favorite_fruits.includes("grapes")) {
}
if (favorite_fruits.includes("cherry")) {
    console.log("I really like Cherry!")
}
if (favorite_fruits.includes("pineapple")) {
    console.log("I really like Pineapple!")
}