import React from 'react';

const Todo=({todos,delete1})=>{
   const newTodos=todos.length ? (
        todos.map((el)=>{
           return <div  className='collection-item ' key={el.id}>
                  <span>{el.content}</span>
                  <button className='btn blue' onClick={()=>{delete1(el.id)}}  style={{  float:"right" ,height:"25px",lineHeight:"20px",padding:""}}>Delete</button>
                  </div>
        })
   ) : ( 
   <p className='centre'>No more left </p>  )

    return(
        <div className='todos collection'>
            {newTodos}
        </div>
    )
}

export default Todo;