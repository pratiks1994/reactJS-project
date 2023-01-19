import React from 'react'

function AddList({newItem,handleClick,addItem}) {
  return (
    <form className='input-form'>
        <input
            className='input-field'
            type="text"
            value={newItem}
            onChange={(e)=>handleClick(e)}
        /> 
        <button type ="button" onClick={addItem} className='add-button'>add</button>
           
    </form>
  )
}

export default AddList