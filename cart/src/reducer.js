export default function reducer(state,action){
if(action.type === "SET_CART" ){
    return {...state ,loading : false, cart:action.payload}
}
if(action.type === "CLEAR"){
    return {...state, cart:[]}
}
if(action.type==='MODIFY'){
    
    const {id,add} = action.payload ;
    
    let newCart = state.cart.map((item)=>{
        if(item.id===id){
            return {...item,amount:item.amount + add} 
        }
        else{
            return item
        }
    }).filter((item)=>item.amount!= 0)
    return {...state,cart:newCart}
}
if(action.type==="REMOVE_ITEM"){
    let newCart = state.cart.filter(item=>item.id!=action.payload)
    return {...state,cart:newCart}
}

if(action.type==="FINAL_COUNT"){
    let newTotal = state.cart.reduce((acc,item)=>acc+=item.amount*item.price,0)
    let newAmount = state.cart.reduce((acc,item)=>acc+=item.amount,0)

    return {...state,total:newTotal,amount:newAmount}

}

}