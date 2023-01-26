import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  let initial = {loading:true,cart:cartItems,total:0,amount:0}
  const [state,dispatch]=useReducer(reducer,initial)

  useEffect(()=>{
    dispatch({type:"FINAL_COUNT"})
  },[state.cart,state.amount])

  useEffect(()=>{

    const getCart= async()=>{
      let res = await fetch('https://course-api.com/react-useReducer-cart-project')
      let data = await res.json()
      dispatch({type:'SET_CART',payload:data})
    }
    getCart()
  },[])

  let clearCart = () =>{
    dispatch({type:"CLEAR"})
  }
  let modifyCart = (id,add) =>{
    dispatch({type:"MODIFY" , payload: {id,add} })
  }
  let removeItem = (id)=> {
    dispatch({type:"REMOVE_ITEM",payload:id})
  }

 
  return (
    <AppContext.Provider
      value={{
        ...state,
        clearCart,
        modifyCart,
        removeItem
      
        
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
