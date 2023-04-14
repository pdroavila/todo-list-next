"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const addTodo = async (name, refresh) => {
  const response = await fetch(`/api/todo/add`, {
    method: "POST",
    body: JSON.stringify({ name }),
  });

  refresh();
};

const AddNewTodo = () => {
  const [name, setName] = useState("");
  const router = useRouter();

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <button
        onClick={(e) => {
          addTodo(name, router.refresh);
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddNewTodo;
