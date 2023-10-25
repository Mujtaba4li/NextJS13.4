import TodoList from '@/components/TodoList'
import db from '@/utils/db'
import { todo } from 'node:test'

import React from 'react'
const getData=async () =>{
	const todos=await db.todo.findMany({})
	return todo
}
const todos = async() => {
	const todo=await getData();
	console.log(todo);
	return <div>
		<TodoList todo={todo}/>
	</div>
}

export default todos
