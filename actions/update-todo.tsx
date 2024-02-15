'use server'

import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { getOwnTodo } from "./helpers/get-own-todo";

export const updateTodoDescription = async (id: number, description: string) => {
  const todo: Todo = await getOwnTodo(id);

  await prisma.todo.update({
    where: {
      id: todo.id
    },
    data: {
      description
    }
  })

  return description;
}