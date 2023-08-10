"use client";

import { useEffect, useState } from "react";
import TodoListItem from "./TodoListItem";

type Props = {
  getTodoList: () => Promise<{ id: number; text: string; done: boolean }[]>;
  deleteTodo: (id: number) => Promise<void>;
  updateTodoDone: (todoId: number, done: boolean) => Promise<void>;
  updateTodoText: (todoId: number, text: string) => Promise<void>;
};

export default function TodoList({
  getTodoList,
  deleteTodo,
  updateTodoDone,
  updateTodoText,
}: Props) {
  const [todoList, setTodoList] = useState<
    { id: number; text: string; done: boolean }[]
  >([]);

  const updateTodoList = async () => {
    try {
      const data = await getTodoList();
      setTodoList(data);
    } catch (error) {
      alert("Todoリストの取得に失敗しました");
    }
  };

  const handleClickForDeleteBtn = async (id: number) => {
    try {
      await deleteTodo(id);
    } catch (error) {
      alert("Todoの削除に失敗しました");
    }
  };

  const handleClickForCheckbox = async (id: number, done: boolean) => {
    try {
      await updateTodoDone(id, !done);
    } catch (error) {
      alert("Todoの更新に失敗しました");
    }
  };

  useEffect(() => {
    updateTodoList();
  });

  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <TodoListItem
            key={todo.id}
            todo={todo}
            handleClickForCheckbox={handleClickForCheckbox}
            handleClickForDeleteBtn={handleClickForDeleteBtn}
            updateTodoText={updateTodoText}
          />
        ))}
      </ul>
    </div>
  );
}
