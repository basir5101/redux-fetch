import React from 'react'
import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getAllTodos } from '../services/actions/todosAction'
export default function Todos() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllTodos())
    }, [])

    const { isLoading, todos, error } = useSelector(state => state)
    return (
        <div className='container my-5'>
            <h2 className='text-center mb-5 text-success'>
                Todos app
            </h2>
            {
                isLoading && <strong>loading...</strong>
            }
            {
                error && <h3>{error}</h3>
            }
            <section className='row'>
                {
                    todos && todos.map((todo, index) => (
                        <article className='col-md-4 ' key={todo.id}>
                            <div className='m-1 bg-dark text-white p-3'>
                                <h4> {index + 1}. {todo.title} </h4>
                                <h4> Todo ID: {todo.id} </h4>
                                <h4> Todo USER ID: {todo.userId} </h4>
                            </div>
                        </article>
                    ))
                }
            </section>
        </div>
    )
}
