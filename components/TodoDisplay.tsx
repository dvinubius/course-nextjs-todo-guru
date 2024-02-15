'use client'

import { deleteTodo } from '@/actions/delete-todo';
import { toggleTodo } from '@/actions/toggle-todo';
import { updateTodoDescription } from '@/actions/update-todo';
import { Todo } from '@prisma/client';
import { useRouter } from 'next/navigation';
import React from 'react'
import { BiCheckbox, BiCheckboxChecked } from 'react-icons/bi';
import { BsCheckCircle, BsPencil, BsTrash, BsXLg } from 'react-icons/bs';


interface TodoDisplayProps {
  todo: Todo
}

function TodoDisplay({todo}: TodoDisplayProps) {
  const {id, title, description, done} = todo;
  
  const [isDone, setIsDone] = React.useState(done);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedDescription, setEditedDescription] = React.useState(description || '');
  const [isUpdating, setIsUpdating] = React.useState(false); // disable interactivity while updating

  const router = useRouter();

  const toggleDone = async () => {
    try {
      setIsUpdating(true);
      const result = await toggleTodo(id);
      setIsDone(result);
    } catch (e: any) {
      console.error(e);
      throw(e); // TODO handle gracefully
    } finally {
      setIsUpdating(false);
    }
  }

  const startEdit = () => {
    setIsEditing(!isEditing);
  }

  const handleDelete = async () => {
    try {
      setIsUpdating(true);
      const result = await deleteTodo(id);
      if (result) {
        router.replace('/todos');
        router.refresh();
      }
    }
    catch (e: any) {
      console.error(e);
      throw(e); // TODO handle gracefully
    } finally {
      setIsUpdating(false);
    }
  }

  const saveEdit = async () => {
    try {
      setIsUpdating(true);
      await updateTodoDescription(id, editedDescription); 
    } catch (e: any) {
      console.error(e);
      throw(e); // TODO handle gracefully
    } finally {
      setIsEditing(!isEditing);
      setIsUpdating(false);
    }
  }

  const cancelEdit = () => {
    setIsEditing(!isEditing);
    setEditedDescription(description || '');
  }

  return (
    <div className={`flex flex-col gap-16 
        ${isUpdating ? 'pointer-events-none' : ''}
    `}>
      <div className={`flex justify-between`}>
        <h2 className='text-2xl font-medium'>{title}</h2>          
        <div className='text-4xl text-[#2f2f2f] cursor-pointer'>
          {isDone ? <BiCheckboxChecked onClick={toggleDone} /> : <BiCheckbox onClick={toggleDone}/>}
        </div>
      </div>
        <div className='flex items-center justify-end gap-4 text-2xl'>
        {!isEditing && (
          <>
            <BsPencil className='cursor-pointer' onClick={startEdit}/>
            <BsTrash className='cursor-pointer' onClick={handleDelete}/>
          </>
        )}
        {isEditing && (
          <>
            <BsCheckCircle className='cursor-pointer' onClick={saveEdit}/>
            <BsXLg className='cursor-pointer' onClick={cancelEdit}/>
          </>
        )}
        </div>
      {!isEditing && <p className='text-lg'>{editedDescription}</p>}
      {isEditing && <textarea className='w-[536px] h-48 p-4 border border-gray-300 text-lg' 
        defaultValue={editedDescription || ''}
        onChange={(e) => setEditedDescription(e.target.value)} 
      />}
    </div>
  )
}

export default TodoDisplay