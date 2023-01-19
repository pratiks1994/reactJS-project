import React from 'react'
import { useRef } from 'react';
import { useGlobalContext } from '../context'

const SearchForm = () => {

 const {setSearch} = useGlobalContext() ;

 let searchRef = useRef('')

 const handleSubmit = (e) => {
  e.preventDefault()
 }

 const handleChange= () => {
  setSearch(searchRef.current.value)

 }

  return (
 <section className='seaction search'>
  <form className='search-form' onSubmit={handleSubmit}> 
    <div className="form-control">
      <input type="text" ref={searchRef} onChange={handleChange} />
      <label>search Drinks</label>
    </div>
  </form>
 </section>
    
  )
}

export default SearchForm
