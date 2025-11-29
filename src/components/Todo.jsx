import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";
const Todo = () => {
  const inputRef = useRef();
  const [todoList, setTodo] = useState(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos"))
      : []
  );
  const add = () => {
    const inputText = inputRef.current.value.trim();
    if (inputText === "") {
      return null;
    }
    const newTodo = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodo((prev) => [...prev, newTodo]);
    inputRef.current.value = "";
  };
  const deleteTodo = (id) => {
    setTodo((prev) => {
      return prev.filter((todo) => {
        return todo.id !== id;
      });
    });
  };
  const toggle = (id) => {
    setTodo((prev) => {
      return prev.map((t) => {
        if (t.id === id) {
          return { ...t, isComplete: !t.isComplete };
        }
        return t;
      });
    });
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);
  function removeAllCompleted() {
    setTodo((prev) => {
      return prev.filter((t) => {
        return !t.isComplete;
      });
    });
  }
  const tasksList = todoList.map((t) => {
    return (
      <TodoItems
        text={t.text}
        key={t.id}
        id={t.id}
        isComplete={t.isComplete}
        deleteTodo={deleteTodo}
        toggle={toggle}
      />
    );
  });
  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-2xl">
      {/* --- tittle ---  */}
      <div className="flex items-center mt-7 gap-2">
        <img src={todo_icon} alt="" className="w-8" />
        <h1 className="text-3xl font-semibold">To-Do List</h1>
      </div>
      {/* --- input box ---  */}
      <div className="flex items-center my-7 bg-gray-200 rounded-full">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add Your Task"
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer transition-all duration-200 ease-in hover:bg-amber-700"
        >
          ADD +
        </button>
      </div>
      <div>
        <button
          className="flex items-center justify-start w-fit
        font-semibold text-sm text-white bg-orange-600 rounded-2xl shadow-2xl p-1 cursor-pointer transition-all duration-150 ease-in-out hover:bg-amber-700"
          onClick={removeAllCompleted}
        >
          Clear All Completed
        </button>
      </div>
      {/* --- todo list ---  */}
      <div>
        {todoList.length === 0 ? (
          <div className="w-full text-orange-700 text-2xl font-bold font-mono h-[27vh] flex items-center justify-center ">
            No Tasks Added Yet
          </div>
        ) : (
          tasksList
        )}
      </div>
    </div>
  );
};

export default Todo;
