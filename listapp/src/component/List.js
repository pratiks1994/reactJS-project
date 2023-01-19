import React from 'react'

function List({item, id , isCompleted , toggleCheck, handleDelet }) {
    let style = isCompleted ? {color : "blue"}:{}

  return (
    <div className='List'>
        <input className= "item-check"
             
            type="checkbox"
            onChange={()=>toggleCheck(id)}
            checked = {isCompleted}           
        />
        <h3 style={style} className='item-name'>{item}</h3>
        
        <button className='item-delet' onClick={()=>handleDelet(id)}>delet</button>    

    </div>
  )
}

export default List