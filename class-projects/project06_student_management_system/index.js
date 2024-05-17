#! /usr/bin/env node
import inquirer from "inquirer";
// class Student {
//   private name: string;
//   private studentID: number;
//   private courses: { course: string, tuitionFees: number, paid: boolean }[];
//   private balance: number;
//   constructor(name: string) {
//     this.name = name;
//     this.studentID = this.generateStudentID();
//     this.courses = [];
//     this.balance = 0;
//   }
//   generateStudentID(): number {
//     return Math.floor(Math.random() * 90000) + 10000;
//   }
//   enroll(course: string): void {
//     let tuitionFees: number;
//     switch (course) {
//       case 'Math':
//         tuitionFees = 1000;
//         break;
//       case 'Science':
//         tuitionFees = 1200;
//         break;
//       case 'English':
//         tuitionFees = 900;
//         break;
//       default:
//         console.log('Invalid course');
//         return;
//     }
//     inquirer.prompt([
//       {
//         type: 'input',
//         name: 'amount',
//         message: `Enter amount to pay (min $${tuitionFees}): `,
//       },
//     ]).then((answers: { amount: string }) => {
//       const paidAmount = parseFloat(answers.amount);
//       if (paidAmount >= tuitionFees) {
//         this.courses.push({ course, tuitionFees, paid: true });
//         this.balance -= tuitionFees;
//         console.log(`Successfully enrolled in ${course} and paid $${tuitionFees}`);
//         this.showStatus();
//       } else {
//         this.courses.push({ course, tuitionFees, paid: false });
//         console.log(`Insufficient amount paid. Please pay the remaining $${tuitionFees - paidAmount}`);
//       }
//     });
//   }
//   viewBalance(): void {
//     console.log(`Current Balance: $${this.balance}`);
//   }
//   updateBalance(course: string, amount: number): void {
//     const courseIndex = this.courses.findIndex((c) => c.course === course);
//     if (courseIndex !== -1) {
//       this.courses[courseIndex].paid = true;
//       this.balance -= amount;
//       console.log(`Updated balance for ${course}: $${amount}`);
//     } else {
//       console.log(`Course not found`);
//     }
//   }
//   showStatus(): void {
//     console.log(`Name: ${this.name}`);
//     console.log(`Student ID: ${this.studentID}`);
//     console.log(`Courses Enrolled:`);
//     this.courses.forEach((course) => {
//       console.log(`  ${course.course} ($${course.tuitionFees}) - ${course.paid ? 'Paid' : 'Not Paid'}`);
//     });
//     console.log(`Balance: $${this.balance}`);
//   }
//   get getName(): string {
//     return this.name;
//   }
//   get getStudentID(): number {
//     return this.studentID;
//   }
//   get getCourses(): { course: string, tuitionFees: number, paid: boolean }[] {
//     return this.courses;
//   }
//   get getBalance(): number {
//     return this.balance;
//   }
//   set setBalance(amount: number) {
//     this.balance = amount;
//   }
// }
// const studentInfo = await inquirer.prompt([
//   { message: "Enter Student Name", type: "input", name: "name" },
//   { message: "Select Course", type: "list", name: "course", choices: ["Math", "Science", "English"] },
//   { message: "Enter Initial Balance", type: "number", name: "balance" },
// ]);
// const student = new Student(studentInfo.name);
// student.enroll(studentInfo.course);
// student.setBalance = studentInfo.balance;
class Student {
    name;
    studentID;
    courses;
    balance;
    constructor(name) {
        this.name = name;
        this.studentID = this.generateStudentID();
        this.courses = [];
        this.balance = 0;
    }
    generateStudentID() {
        return Math.floor(Math.random() * 90000) + 10000;
    }
    enroll(course) {
        let tuitionFees;
        switch (course) {
            case 'Math':
                tuitionFees = 1000;
                break;
            case 'Science':
                tuitionFees = 1200;
                break;
            case 'English':
                tuitionFees = 900;
                break;
            default:
                console.log('Invalid course');
                return;
        }
        if (this.balance < tuitionFees) {
            console.log('Insufficient balance. Please add money to your account.');
            this.addMoney();
        }
        else {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'amount',
                    message: `Enter amount to pay (min $${tuitionFees}): `,
                },
            ]).then((answers) => {
                const paidAmount = parseFloat(answers.amount);
                if (paidAmount >= tuitionFees) {
                    this.courses.push({ course, tuitionFees, paid: true });
                    this.balance -= tuitionFees;
                    console.log(`Successfully enrolled in ${course} and paid $${tuitionFees}`);
                    this.showStatus();
                }
                else {
                    this.courses.push({ course, tuitionFees, paid: false });
                    console.log(`Insufficient amount paid. Please pay the remaining $${tuitionFees - paidAmount}`);
                }
            });
        }
    }
    addMoney() {
        inquirer.prompt([
            {
                type: 'input',
                name: 'amount',
                message: 'Enter amount to add: ',
            },
        ]).then((answers) => {
            const addedAmount = parseFloat(answers.amount);
            this.balance += addedAmount;
            console.log(`Added $${addedAmount} to your account.`);
        });
    }
    viewBalance() {
        console.log(`Current Balance: $${this.balance}`);
    }
    updateBalance(course, amount) {
        const courseIndex = this.courses.findIndex((c) => c.course === course);
        if (courseIndex !== -1) {
            this.courses[courseIndex].paid = true;
            this.balance -= amount;
            console.log(`Updated balance for ${course}: $${amount}`);
        }
        else {
            console.log(`Course not found`);
        }
    }
    showStatus() {
        console.log(`Name: ${this.name}`);
        console.log(`Student ID: ${this.studentID}`);
        console.log(`Courses Enrolled:`);
        this.courses.forEach((course) => {
            console.log(`  ${course.course} ($${course.tuitionFees}) - ${course.paid ? 'Paid' : 'Not Paid'}`);
        });
        console.log(`Balance: $${this.balance}`);
    }
    get getName() {
        return this.name;
    }
    get getStudentID() {
        return this.studentID;
    }
    get getCourses() {
        return this.courses;
    }
    get getBalance() {
        return this.balance;
    }
    set setBalance(amount) {
        this.balance = amount;
    }
}
const studentInfo = await inquirer.prompt([
    { message: "Enter Student Name", type: "input", name: "name" },
    { message: "Select Course", type: "list", name: "course", choices: ["Math", "Science", "English"] },
    { message: "Enter Initial Balance", type: "number", name: "balance" },
]);
const student = new Student(studentInfo.name);
student.setBalance = studentInfo.balance;
student.enroll(studentInfo.course);
