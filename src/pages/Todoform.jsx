import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'; 
import {Link} from 'react-router-dom';


function Todoform() {
        const dispatch = useDispatch();
        const [title,setTitle] = useState('')
        const [description,setDescription] = useState('')
        const todos = useSelector((state)=>state.Todos)
        const handleSubmit =(e)=>{
            e.preventDefault();
            const newTodo = {
                id : Date.now().toString(),
                Title: title , 
                Description: description
            }
            dispatch({type:"Add_TODO", payload: newTodo})
        }
            const deleteTodo =(id)=>{
                dispatch ({type: "DELETE_TODO" , payload: id});
            }
          


            
                 
      
    return (
        
        <div className='w-50 mt-5'>
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

            
                <button type="submit" class="btn btn-primary w-100">Save Todo</button>
                </form>
                <ul class="list-group mt-4" >
                    <li class="list-group-item bg-success" aria-current="true">TODO List</li>
                    {
                        todos.length ===0 ? <li class="list-group-item " > <h5>No Item Found </h5> </li>:
                        todos && todos.map(todo=>{
                        return <li key= {todo.id} class="list-group-item d-flex justify-content-between">
                            {todo.Title}
                            <div>
                            <button className="btn btn-danger" onClick={()=>deleteTodo(todo.id)}>Delete</button>
                            <Link to ={`/edit-todo/${todo.id}`} className="btn btn-warning ms-2">Edit</Link>
                            
                            </div>

                            </li>
                        })
                    }                           
                    
                   
                    </ul>

       
            </div>

    );
}


        

      

export default Todoform;

