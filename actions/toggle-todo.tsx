'use server'

import prisma from "@/lib/prisma";
import { getOwnTodo } from "./helpers/get-own-todo";
import { Todo } from "@prisma/client";

export const toggleTodo = async (id: number) => {
  const todo: Todo = await getOwnTodo(id);

  await prisma.todo.update({
    where: {
      id: todo.id
    },
    data: {
      done: !todo.done
    }
  })

  return !todo.done;
}