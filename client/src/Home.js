import React, { useEffect, useState } from "react";
import { BASE_URL } from "./constant";
import TodoTable from "./components/TodoTable/table";

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch(`${BASE_URL}/show/todos`)
      .then((res) => {
        return new Promise((resolve, reject) => {
          let result = [];
          try {
            result = res.json();
          } catch (error) {
            reject(error);
          }
          resolve(result);
        });
      })
      .then((result) => {
        setTodos(result);
      });
  }, []);
  return <TodoTable data={todos} />;
}
