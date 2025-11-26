const savedNames = new Set();
const todo = [];
let addRegex = /^add (.+) to my todo$/i;
let removeRegex = /^remove (.+) from my todo$/i;
let listRegex = /^what is on my todo\??$/i;
function getReply(command) {
  const regex = /^hello my name is (\w+)$/i; // case-insensitive
  const match = command.match(regex);

  if (match) {
    const name = match[1]; // capture the name
    if (!savedNames.has(name.toLowerCase())) {
      savedNames.add(name.toLowerCase());
      return `Nice to meet you ${name}`;
    } else {
      return `I already know you, ${name}`;
    }
  }
  return "What is my name ?";

  function toDoList(message) {
    if (addRegex.test(message)) {
      const task = message.match(addRegex)[1].toLowerCase();
      todos.push(task);
      return `${task} added to your todo`;
    }

    // Remove todo
    if (removeRegex.test(message)) {
      const task = message.match(removeRegex)[1].toLowerCase();
      const index = todos.indexOf(task);
      if (index !== -1) {
        todos.splice(index, 1);
        return `Removed ${task} from your todo`;
      } else {
        return `${task} was not found in your todo`;
      }
    }

    // List todos
    if (listRegex.test(message)) {
      if (todos.length === 0) {
        return "Your todo list is empty";
      } else {
        return `You have ${todos.length} todos - ${todos.join(" and ")}`;
      }
    }

    return "Message not recognized.";
  }
}

// Example usage:
console.log(getReply("Hello my name is Benjamin"));
// → Nice to meet you Benjamin
console.log(getReply("Hello my name is Fatima"));
console.log(getReply("Hello my name is "));
// → I already know you, Benjamin
// Keep track of todos in an array

// Example usage:
console.log(toDoList("Add fishing to my todo"));
// fishing added to your todo

console.log(toDoList("Add singing in the shower to my todo"));
// singing in the shower added to your todo

console.log(toDoList("Remove fishing from my todo"));
// Removed fishing from your todo

console.log(toDoList("What is on my todo?"));
// You have 1 todos - singing in the shower
