import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { save, update } from './features/todos/todoSlice'

const Form = () => {
 
     const {edit}= useSelector(state=> state.todos)

    const [text, setText] = useState("")
    const dispatch =useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();

       if(edit. editMode){
        dispatch(update({
          id: edit.todo.id,
          text,

        }))
       }
       else{
        dispatch(save({
            id: crypto.randomUUID(),
            text,
     }));
       }
        setText("");
    };

    useEffect(()=>{
        setText(edit.todo.text)
    }, [edit])

    return (
        <form onSubmit={handleSubmit}>
            <input className='form-control rounded-0 my-3'
                type="text"
                placeholder='Enter text here'
                onChange={(e)=> setText(e.target.value)} 
                value={text}/>
                

            <button className="btn btn-success rounded-0 w-100"> Save</button>
        </form>

    )
}

export default Form