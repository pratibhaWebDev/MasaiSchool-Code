// You are developing a task management system that tracks pending tasks for the day. 
// Create an array with five tasks. Implement the following operations without using specific method references:

// Remove the first task from the list.
// Add two new high-priority tasks to the beginning of the list.
// Replace the last task in the list with a new task.
// Log the updated task list after all operations


let tasks=["ES6 Learning","Take Class","Bathing","Cooking","Go for Walk"]
tasks.shift() //Remove the first task from the list.
tasks.unshift("Learning Communication skill","Make Notes") // Add two new high-priority tasks to the beginning of the list.
tasks[tasks.length-1]="Go for Runing"
console.log(tasks)

