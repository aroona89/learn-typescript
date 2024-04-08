#! /usr/bin/env node 

import inquirer from "inquirer";

import chalk from "chalk";
console.log(chalk.yellowBright.bold("Welcome to To-do App!"));

interface Task {
  id: number;
  description: string;
}

let todoList: Task[] = [];
let condition = true;
let nextId = 1;

while (condition) {
  let choice = await inquirer.prompt({
    name: "option",
    type: "list",
    message: "Select an option:",
    choices: ["Add Task", "View Task", "Update Task", "Delete Task", "Exit"],
  });
  switch (choice.option) {
    case "Add Task":
      let addTask = await inquirer.prompt({
        name: "description",
        type: "input",
        message: "Enter Task:",
      });
      // Check if description is empty string, null, undefined, etc. (falsy value)
      if (addTask.description) {
        todoList.push({ id: nextId++, description: addTask.description });
      } else {
        console.log(chalk.redBright("Please enter a task description."));
      }
      break;
    case "View Task":
      console.log(chalk.bgGrey.bold("Tasks List:"));
      if (todoList.length === 0) {
        console.log(chalk.redBright("No tasks available to View!"));
      } else {
        todoList.forEach((task, index) => {
          console.log(chalk.whiteBright.bold(`${index + 1}- ${task.description}`));
        });
      }
      break;
    case "Update Task":
      if (todoList.length === 0) {
        console.log(chalk.redBright("No tasks available to update."));
      } else {
        const choices = todoList.map((task, index) => ({
          name: `${index + 1}: ${task.description}`,
          value: task.id,
        }));
        const selectedTask = await inquirer.prompt({
          name: "taskId",
          type: "list",
          message: "Select a task to update:",
          choices: choices,
        });

        const taskToUpdate = todoList.find(
          (task) => task.id === selectedTask.taskId
        );

        if (!taskToUpdate) {
          console.log(chalk.redBright("Task not found."));
          break;
        }

        const updatedTask = await inquirer.prompt({
          name: "updatedDescription",
          type: "input",
          message: "Enter updated task description:",
          default: taskToUpdate.description // if user don't enter anything take current description by default instead empty string
        });
        // console.log(updatedTask.updatedDescription !== taskToUpdate.description); // enter new task 
        if (updatedTask.updatedDescription !== taskToUpdate.description) { 
          taskToUpdate.description = updatedTask.updatedDescription;
          console.log(chalk.greenBright("Task updated successfully."));
        } else {
          console.log(chalk.redBright("Please enter a new description to update the task."));
        }
      }
      break;
    case "Delete Task":
      if (todoList.length === 0) {
        console.log(chalk.redBright("No tasks to delete."));
      } else {
        const selectOption = todoList.map((task, index) => ({
          name: `${index + 1}: ${task.description}`,
          value: task.id,
        }));
        const selectedOption = await inquirer.prompt({
          name: "selectedOptions",
          type: "checkbox",
          message: "Select options:",
          choices: selectOption,
        });
        // Filter out the selected tasks and update the todoList
        todoList = todoList.filter(
          (task) => !selectedOption.selectedOptions.includes(task.id)
        );
        console.log(chalk.greenBright("Tasks deleted successfully."));
      }
      break;
    default:
      console.log(chalk.yellowBright("Thank you for using Todo App!"));
      condition = false;
      break;
  }
}

// for (const i in todoList) {
//   let index = +i + 1;
//   console.log(`${index}- ${todoList[i]}`);
// }
