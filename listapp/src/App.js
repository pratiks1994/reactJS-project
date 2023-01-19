
import './App.css';
import Header  from "./component/Header";
import { useState, useEffect } from 'react';
import AddList from './component/AddList';
import List from './component/List';


function App() {

const [newItem,setNewItem] = useState("")
// const [listItem,setListItem] = useState([JSON.parse(localStorage.getItem('listitem'))])
const [listItem,setListItem] = useState(JSON.parse(localStorage.getItem('items')) || [])
 const handleClick = (e) => {
  setNewItem(e.target.value)
  console.log(e.target.value)
}

 let toggleCheck = (id) =>{
  setListItem((prevListItem) => {
    return prevListItem.map((item)=>{
      return item.id===id ? {...item, isCompleted:!item.isCompleted} : item
    } )
  } )
}



const handleDelet = (id) => {
  setListItem((prevList)=>{
    return prevList.filter((item)=>item.id!=id)
  })
  
}
const addItem = () => {
 if(newItem) {setListItem ((prevItem)=>{
    let addItem = { id : prevItem.length + 1 , item : newItem , isCompleted:false}
    return [...prevItem, addItem]
  }) 
  setNewItem("")}  
}

useEffect(() => {
  localStorage.setItem('items',JSON.stringify(listItem));

}, [listItem]);

 let listField =listItem.map((item)=>{
   return <List item = {item.item}
                 key={item.id}  
                 id = {item.id}
                 isCompleted= {item.isCompleted}
                 toggleCheck ={toggleCheck}
                 handleDelet = {handleDelet}
          /> 
                 
 })

  return (
    <div className="App">
      <Header/>
      <AddList newItem={newItem} handleClick={handleClick} addItem={addItem}/>
       { listItem.length ? listField : <p>no item to show</p>} 



    </div>
  );
}

export default App;
