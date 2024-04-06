/*Q#30
Hello Admin: Make a array of five or more usernames, including the name 'admin'. 
Imagine you are writing code that will print a greeting to each user after they log in to a website. 
Loop through the array, and print a greeting to each user:
• If the username is 'admin', print a special greeting, such as Hello admin, would you like 
to see a status report?
• Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again. */

var userName: Array<string> = ["admin", "aroona89", "naveed_sarwar", "user123", "stu_4"]
for  (const user of userName) {
    if (user == 'admin') {
        console.log(`Hello ${user}, would you like to see a status report?`);
    } else {
        console.log(`hello ${user}, thank you for loggging in again.`);
    }

}

/* Q#31
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users! */

//• Remove all of the usernames from your array, and make sure the correct message is printed.

var userName: string[] = [];
if (userName.length == 0) {
    console.log("We need to find some users!")
} else {
    for (let user of userName) {
        if (user == 'admin') {
            console.log(`Hello ${user}, would you like to see a status report?`);
        } else {
            console.log(`hello ${user}, thank you for loggging in again.`);
        }
    }
}

/*Q#32
Checking Usernames: Do the following to create a program that simulates how websites
ensure that everyone has a unique username.
• Make a list of five or more usernames called current_users. */
var current_users: string[] = ['john', 'akbar', 'aroona', 'amina', 'BILAL'];
/* • Make another list of five usernames called new_users. 
Make sure one or two of the new usernames are also in the current_users list. */
var new_users: string[] = ['aroona', 'JOHN', 'umer', 'fatima', 'bilal']

// Convert all usernames in current_users to lowercase
let current_users_lower: string[] = current_users.map(user => user.toLowerCase());

/* • Loop through the new_users list to see if each new username has already been used. 
If it has, print a message that the person will need to enter a new username. 
If a username has not been used, print a message saying that the username is available. 
• Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted. */

for (let new_user of new_users) { // Iterates over the values
    // Convert new_user to lowercase for case-insensitive comparison
    let new_user_lower: string = new_user.toLowerCase();
    if (current_users_lower.includes(new_user_lower)) {
        console.log(`${new_user_lower} is already taken. Enter a new username!`);
    } else {
        console.log(`${new_user_lower} is available!`);
    }
}