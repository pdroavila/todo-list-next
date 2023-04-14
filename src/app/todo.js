"use client";

import { useRouter } from "next/navigation";

const update = async (id, isDone, refresh) => {
  const response = await fetch("/api/todo/update", {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({ id, isDone }),
  });
  refresh();
};

const __delete = async (id, refresh) => {
  const response = await fetch(`/api/todo/delete?id=${id}`, {
    method: "DELETE",
  });
  refresh();
};

export const Todo = ({ todo }) => {
  const router = useRouter();
  return (
    <>
      <input type="checkbox" onChange={(e) => update(todo.id, e.target.checked, router.refresh)} checked={todo.isDone} />
      <span>{todo.name}</span>
      <button onClick={(e) => __delete(todo.id, router.refresh)}>Delete</button>
    </>
  );
};

module.exports = Todo;
