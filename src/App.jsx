import React from "react";
import "./App.css";
import Todo from "./components/Todo";
export const App = () => {
  return (
    <div className="bg-stone-900 grid py-4 min-h-screen">
      <Todo />
    </div>
  );
};
