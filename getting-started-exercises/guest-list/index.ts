/* Q#14
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner. */

var dinner_invite: Array<string> = ["Abu Hurairah", "Naveed Sarwar", "Daniyal Nagori", "Mubashir Ali", "Zia Ullah Khan"];
console.log("\nGUEST LIST:")

// (using for of Loop)
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited on an upcoming class dinner.`);
}

/* Q#15 
Changing Guest List: You just heard that one of your guests can’t make the dinner, 
so you need to send out a new set of invitations. You’ll have to think of someone else to invite. */

/*  Start with your program from Exercise 14. Add a print statement at the end of your 
program stating the name of the guest who can’t make it. */
console.log(`\nUnfortunately, ${dinner_invite[1]} can't make it to dinner.`)

/*  Modify your list, replacing the name of the guest who can’t make it with the name of the
new person you are inviting. */
dinner_invite[1] = "Arif Alvi";

// Print a second set of invitation messages, one for each person who is still in your list.
console.log("\nNEW GUEST LIST:")
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited on an upcoming class dinner.`);
}

/*Q#16
More Guests: You just found a bigger dinner table, so now more space is available. 
Think of three more guests to invite to dinner.

Start with your program from Exercise 15. Add a print statement to the end of your 
program informing people that you found a bigger dinner table. */
console.log("\nGood news! We found a bigger dinner table.")

// Add one new guest to the beginning of your array. 
dinner_invite.unshift("Kamran Tessori")

// Add one new guest to the middle of your array. 
dinner_invite.splice(3,0,"Ameen Alam")

// Use append() to add one new guest to the end of your list. 
dinner_invite.push("IMRAN KHAN")

// Print a new set of invitation messages, one for each person in your list. 
console.log("\nFinal GUEST LIST:")
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited on an upcoming class dinner.`);
}

/* Q#17 
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, 
and you have space for only two guests.
Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite
only two people for dinner. */

console.log("\nBad News! Space for only two guests.")

/* Remove guests from your list one at a time until only two names remain in your list. Each time 
you pop a name from your list, print a message to that person letting them know you’re sorry you can’t 
invite them to dinner. */

while (dinner_invite.length > 2){
    let removed_guest = dinner_invite.shift();
    console.log(`Dear ${removed_guest}, you're not invited for dinner.`);
}

console.log(dinner_invite);

// Print a message to each of the two people still on your list, letting them know they’re still invited.
for (var invite of dinner_invite){
    console.log(`Dear ${invite}, you're warmly invited.`);
}

/* Remove the last two names from your list, so you have an empty list. Print your list to make sure 
you actually have an empty list at the end of your program. */

while (dinner_invite.length = 0){
    dinner_invite.shift();
}
console.log("\nGuest list after removing all guests:", dinner_invite);

/* Q#19 
Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
print a message indicating the number of people you are inviting to dinner. */
var guestCount = dinner_invite.length;
console.log("\nYou are inviting", guestCount, "people to dinner.");










