import React from 'react'
import ListIteam from './ListIteam'
import { useSelector } from 'react-redux'

const ListGroup = ({}) => {

    const { todos } = useSelector((state) => state.todos);
    return (

        <ul className='list-group my-3'>
            {
                todos.map(todo => <ListIteam key={todo.id} todo={todo} />)
            }
        </ul>
    )
}

export default ListGroup