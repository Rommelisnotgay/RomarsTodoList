# To-Do List React Project

## 📌 Overview

This project is a simple and clean To-Do List application built with **React**, **TailwindCSS**, and **LocalStorage**. It allows users to create, complete, and delete tasks, while automatically saving everything in the browser.

---

## 🚀 Features

- Add new tasks
- Mark tasks as complete / incomplete
- Delete individual tasks
- Remove all completed tasks
- Data stored in **localStorage** so it doesn’t disappear on refresh
- Clean UI with TailwindCSS
- Component-based structure using React

---

## 🧠 What I Learned

### **React Concepts**

- Using **useState** to manage component state
- Using **useRef** to access input fields
- Using **useEffect** to sync data with localStorage
- Passing props between components (Todo → TodoItems)
- Rendering lists dynamically using `.map()`
- Updating state in an immutable way

### **JavaScript Skills**

- Filtering arrays with `.filter()`
- Mapping data with `.map()`
- Creating unique IDs using `Date.now()`
- Working with JSON and `localStorage`

### **TailwindCSS Skills**

- Building responsive layouts
- Using utility classes
- Styling inputs, buttons, and cards
- Using classes like:

  - `select-none`
  - `line-through`
  - `decoration-slate-500`
  - spacing, flexbox, colors, rounding, transitions

---

## 🏗️ Project Structure

```
src/
  components/
    Todo.jsx
    TodoItems.jsx
  assets/
    tick.png
    not_tick.png
    delete.png
    todo_icon.png
  App.jsx
  main.jsx
```

---

## 💾 LocalStorage Logic

Tasks are saved automatically:

```js
useEffect(() => {
  localStorage.setItem("todos", JSON.stringify(todoList));
}, [todoList]);
```

And loaded on startup:

```js
const [todoList, setTodo] = useState(
  localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []
);
```

---

## 🧹 Remove Completed Tasks

```js
function removeAllCompleted() {
  setTodo((prev) => prev.filter((t) => !t.isComplete));
}
```

---

## 🎯 Purpose of the Project

This project helped me strengthen:

- My understanding of **React Hooks**
- My ability to create small but complete applications
- My skills in problem-solving and UI building
- My workflow using **TailwindCSS**

---

## 📎 Future Improvements

- Add task editing
- Add categories / priority levels
- Add dark mode
- Add animations with Framer Motion
- Connect backend (Node.js) for saving tasks online

---

## 🧑‍💻 Author

Created with passion and consistency by **Rommel**.

---

## ⭐ If this project helped you, give it a star!
