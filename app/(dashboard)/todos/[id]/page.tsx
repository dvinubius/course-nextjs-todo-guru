
import NavigateBackTodos from '@/components/NavigateBackTodos';
import TodoDisplay from '@/components/TodoDisplay';
import prisma from '@/lib/prisma'
import React from 'react'

interface TodoPageProps {
  params: { id: string }
}

async function TodoPage({params}: TodoPageProps) {
  const todo = await prisma.todo.findUnique({
    where: {
      id: Number.parseInt(params.id)
    }
  });
  
  if (!todo) {
    return <div>Todo not found</div>
  };

  return (
    <div className='p-8 pt-16 flex flex-col items-center gap-32 max-w-[600px] mx-auto'>
      <NavigateBackTodos />
      <TodoDisplay todo={todo} />
    </div>
  )
}

export default TodoPage