// 1. Items list
const products = [
  "Laptop",
  "Phone",
  "Tablet",
  "Headphones",
  "Monitor",
  "Keyboard",
];

function addProduct(array, product) {
  return array.push(product);
}

function removeProduct(array, product) {
  const presence = array.indexOf(product);
  if (presence >= 0) {
    array.splice(presence, 1);
  } else {
    console.log("This item is not available");
  }
  return array;
}

function replaceProduct(array, oldProduct, newProduct) {
  const itemChange = array.indexOf(oldProduct);
  if (itemChange >= 0) {
    array.splice(itemChange, 1, newProduct);
  } else {
    console.log("This old product was not found");
  }
  return array;
}

function checkProduct(array, product) {
  return array.includes(product);
}

function getProducts(array) {
  return array.join(", ");
}

console.log(addProduct(products, "Joystick"));
console.log(addProduct(products, "Soundbar"));

console.log(removeProduct(products, "Tablet"));
console.log(removeProduct(products, "TV"));

console.log(replaceProduct(products, "Monitor", "Mouse"));

console.log(checkProduct(products, "Tablet"));
console.log(checkProduct(products, "Keyboard"));

console.log(getProducts(products));

// 2. List of marks
const scores = [85, 92, 67, 100, 74, 58, 91, 76, 88];

function getScores(array) {
  for (let item of array) {
    console.log(item);
  }
}

function getPassedScores(array) {
  const passed = [];
  for (let item of array) {
    if (item >= 70) {
      passed.push(item);
    }
  }
  return passed;
}

function getTopScores(array, count) {
  if (count > 0) {
    return array.slice(-count);
  }
  return [];
}

function removeLowestScore(array) {
  let minIndex = 0;
  for (let i = 1; i < array.length; i++) {
    if (array[minIndex] > array[i]) {
      minIndex = i;
    }
  }
  return array.splice(minIndex, 1)[0];
}

getScores(scores);

console.log(getPassedScores(scores));

console.log(getTopScores(scores, -5));
console.log(getTopScores(scores, 3));

console.log(removeLowestScore(scores));

// 3. Messages

const messages = "Hello|How are you?|See you tomorrow|Good morning|Thank you";

function getMessages(string) {
  return string.split("|");
}

function getMessagesCount(string) {
  return getMessages(string).length;
}

function findMessage(string, message) {
  return getMessages(string).includes(message);
}

function removeMessage(string, message) {
  const array = getMessages(string);
  const indexToRemove = array.indexOf(message);
  if (indexToRemove >= 0) {
    array.splice(indexToRemove, 1);
  }
  return array.join("|");
}

console.log(getMessages(messages));
console.log(getMessagesCount(messages));

console.log(findMessage(messages, "Hello"));
console.log(findMessage(messages, "Time"));
console.log(findMessage(messages, "tomorrow"));
console.log(findMessage(messages, "See you tomorrow"));

console.log(removeMessage(messages, "Hello"));
console.log(removeMessage(messages, "Good evening"));

// 4. Clients  queue

const clients = ["Anna", "John", "Kate", "Michael", "Sophia"];

function addClient(array, client) {
  array.push(client);
  return array;
}

function addVIPClient(array, client) {
  array.unshift(client);
  return array;
}

function serveClient(array) {
  return array.shift();
}

function cancelLastClient(array) {
  return array.pop();
}

function getClients(array) {
  return array.join("→");
}

console.log(addClient(clients, "Nick"));
console.log(addClient(clients, "Lena"));

console.log(addVIPClient(clients, "Eva"));

console.log(serveClient(clients));
console.log(serveClient(clients));

console.log(cancelLastClient(clients));

console.log(getClients(clients));
