import React from 'react';
import  { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {useParams,useNavigate} from 'react-router-dom';


const EditTodo = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {id} = useParams();
    const todos = useSelector((state)=>state.Todos)
    const todo = todos.find((item)=>item.id=== id)
    const [title,setTitle] = useState(todo.Title)
    const [description,setDescription] = useState(todo.Description)

    const handleSubmit =(e)=>{
     
        e.preventDefault();
     
        const updatedTodo = { 
        id: id ,
        Title : title ,
        Description: description
            
    }
   
    dispatch ({type:'UPDATE_TODO', payload:updatedTodo })
    navigate('/todoform')
}
   
    return (
        <div className='w-50 mt-5'> 
        <h2>Edit-todo</h2>
        <hr/>
        <form onSubmit={handleSubmit}>
        <div class="row mb-3">
            <label for="title" class="col-sm-2 col-form-label">Title</label>
            <div class="col-sm-10">
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value ={title} class="form-control" id="title" />
            </div>
        </div>
        <div class="row mb-3">
            <label for="description" class="col-sm-2 col-form-label">Description</label>
            <div class="col-sm-10">
                <input type="text" onChange={(e)=>setDescription(e.target.value)} value ={description} class="form-control"  id="description" />
            </div>
        </div>


        <button type="submit" class="btn btn-primary w-100">Update Todo</button>
        </form>
        </div>
    );
}

export default EditTodo;