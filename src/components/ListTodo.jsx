import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function ListeToDo() {
    const { id } = useParams()
    const userListe = useSelector(state => state.user.user)
    const todoListe = useSelector(state => state.todo.todo)
    const selectedUser = userListe.users.filter(user => user.id == id)
    const selectedToDos = todoListe.todos.filter(todo => todo.id == id)
    return (
        <div>
            <h1>{`${(selectedUser[0].firstName).toUpperCase()} ${(selectedUser[0].lastName).toUpperCase()}`} TODO LISTE</h1>
            <div className='Info'>
                <table>
                    <thead>
                        <tr>
                            <td>Information</td>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        {selectedToDos.map(todo => <tr key={todo.id}>
                            <td>
                                {todo.todo}
                            </td>
                            <td>
                                {todo.completed === true ? <FontAwesomeIcon icon={faCheck} /> : <FontAwesomeIcon icon={faXmark} />}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}