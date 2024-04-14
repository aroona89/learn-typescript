// SetTimeout & SetInterval Method
console.log("before async code");
// function doSomething() {
//   console.log("print doSomething");
// }
// setTimeout(doSomething, 2000); // 2000 mili seconds => 2000/1000=2seconds
// setTimeout method Schedules a function to be executed once after a specified delay (in milliseconds).
setTimeout(() => {
    console.log("print doSomething");
}, 2000);
console.log("after async code");
// setInterval method Schedules a function to be executed repeatedly at a specified interval (in milliseconds) infinite loop
// function printTime() {
//   console.log("Current time:", Date());
// }
// setInterval(printTime, 5000); // Print time after every 5 seconds
setInterval(() => {
    console.log("Current time:", Date());
}, 5000);
export {};
