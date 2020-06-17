import React from 'react';


const Input = (props)=>{
    return(
        <div>
            <input type='text' placeholder='Enter Todo' onBlur ={props.onblur}/>
            <button onClick = {props.onclick}>Add Todo</button>
        </div>
    )
}

export default Input