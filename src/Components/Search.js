import React from 'react'
import styles from './Search.scss'

const Search = ({setSearch,setPage,search}) => { 
  return (
    
      <form action="" className='d-flex justify-content-center gap-4 mb-3'>
        <input type="text" name='text' value={search} placeholder='Search for characters' onChange={(e)=>{
          setPage(1)
          setSearch(e.target.value)
          }} />
        <button onClick={(e)=>{e.preventDefault()}} style={{cursor:'default'}}  className='btn button-85'>Type in the box </button>
      </form>
      
  )
}

export default Search
