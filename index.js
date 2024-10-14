document.addEventListener("DOMContentLoaded", loadTasks);

function addTask() {
  const taskText = document.getElementById("newTask").value;
  if (!taskText) return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks(tasks);
  document.getElementById("newTask").value = "";
}

function removeTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTasks(tasks);
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  displayTasks(tasks);
}

function displayTasks(tasks) {
  const taskList = document.getElementById("taskList");
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    taskItem.textContent = task;
    taskItem.innerHTML += ` <button onclick="removeTask(${index})">Видалити</button>`;
    taskList.appendChild(taskItem);
  });
}

document.addEventListener("DOMContentLoaded", loadUserData);

function saveUserData() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    const user = { username, password };
    localStorage.setItem("user", JSON.stringify(user));
  }

  return false;
}

function loadUserData() {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    document.getElementById("username").value = user.username;
    document.getElementById("password").value = user.password;
  }
}

document.addEventListener("DOMContentLoaded", loadBookmarks);

function addBookmark() {
  const bookmarkUrl = document.getElementById("bookmark").value;
  if (!bookmarkUrl) return;

  let bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  bookmarks.push(bookmarkUrl);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  displayBookmarks(bookmarks);
  document.getElementById("bookmark").value = "";
}

function removeBookmark(index) {
  let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
  bookmarks.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
  displayBookmarks(bookmarks);
}

function loadBookmarks() {
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || [];
  displayBookmarks(bookmarks);
}

function displayBookmarks(bookmarks) {
  const bookmarkList = document.getElementById("bookmarkList");
  bookmarkList.innerHTML = "";
  bookmarks.forEach((bookmark, index) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="${bookmark}" target="_blank">${bookmark}</a> <button onclick="removeBookmark(${index})">Видалити</button>`;
    bookmarkList.appendChild(li);
  });
}

document.addEventListener("DOMContentLoaded", loadContacts);

function addContact() {
  const contact = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
  };

  let contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  contacts.push(contact);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts(contacts);
  return false;
}

function removeContact(index) {
  let contacts = JSON.parse(localStorage.getItem("contacts"));
  contacts.splice(index, 1);
  localStorage.setItem("contacts", JSON.stringify(contacts));
  displayContacts(contacts);
}

function loadContacts() {
  const contacts = JSON.parse(localStorage.getItem("contacts")) || [];
  displayContacts(contacts);
}

function displayContacts(contacts) {
  const contactList = document.getElementById("contactList");
  contactList.innerHTML = "";
  contacts.forEach((contact, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${contact.firstName} ${contact.lastName}, Телефон: ${contact.phone}, Email: ${contact.email} <button onclick="removeContact(${index})">Видалити</button>`;
    contactList.appendChild(li);
  });
}
