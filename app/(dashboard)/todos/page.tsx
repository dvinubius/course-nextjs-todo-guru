import React from 'react';
import prisma from '@/lib/prisma';
import { currentUser } from '@clerk/nextjs';
import { User } from '@clerk/nextjs/server';
import { Todo } from '@prisma/client';
import Link from 'next/link';
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';

async function TodosPage() {
  const user: User | null = await currentUser();

  if (!user) {
    // handle internal error: access to restricted route without authenticated user
    return <div>Loading ...</div>
  }

  const todos: Todo[] = await prisma.todo.findMany({
    where: {
      userId: user?.id
    },
    orderBy: [
      { done: 'asc' },
      { createdAt: 'desc' }
    ]
  });

  // wait for 3000ms to simulate slow network
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div className='p-8 flex flex-col items-center gap-8 max-w-[600px] mx-auto'>
      <h1 className='mt-8 text-4xl font-medium'>Todos</h1>
      <ul className='flex flex-col gap-4'>
        {todos.map((todo) => (
          <li key={todo.id}>
            <Link href={`/todos/${todo.id}`} 
                className={`flex flex-col gap-2 bg-[#fafafa] shadow-md rounded-md py-4 px-8
                ${todo.done ? 'opacity-60' : 'opacity-100'}  
              `}>
              <div className='flex items-center justify-between'>
                <h2 className='text-xl font-medium'>{todo.title}</h2>
                <div className='text-4xl text-[#2f2f2f]'>
                  {todo.done ? <BiCheckboxChecked /> : <BiCheckbox/>}
                </div>
              </div>
              <hr />
              <p className='text-base'>{todo.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default TodosPage