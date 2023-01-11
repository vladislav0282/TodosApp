import { useState } from 'react';

export const Form = ({addNewTodo}) =>{


    const [title, setTitle] = useState('')

    const changeHandler = (e) => {
        setTitle(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        if (title.length){
            addNewTodo(title)
            console.log({title});
            setTitle('')
        }
    }

   
    return (
        <div className="d-flex justify-content-center">
            <form onSubmit={submitHandler} className="d-flex flex-column align-items-center">
                <div className="mb-2">
                <input value={title} onChange={changeHandler} placeholder="Title..." type="text" className="form-control"/>
                </div>
                <button type="submit" className="btn btn-primary">
                Add
                </button>
            </form>
        </div>
    )
}