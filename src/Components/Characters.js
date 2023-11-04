import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {api} from '../index'
import { Button, Container, HStack, Input,  VStack,  } from '@chakra-ui/react';
import Loader from './Loader.js';
import CharacterCard from './CharacterCard.js';
import NotFound from './NotFound';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap';
import Filters from './Filters/Filters.js';
import Pagination from './Pagination.js';
import Search from './Search.js';


const Characters = () => {
  const [loading, setLoading] = useState(true) 
  const [characters, setCharacters] = useState([]) 
  const [info, setInfo] = useState({}) 
  const [search, setSearch] = useState('')
  const [error, setError] = useState(false) 
  const [page, setPage] = useState(1) 
  const [status, setStatus] = useState('') 
  const [gender, setGender] = useState('') 
  const [species, setSpecies] = useState('') 
  
  
  useEffect(() => {
  
     const fetchCharacters =async()=>{ 
      try {
        const {data} = await axios.get(`${api}/character/?page=${page}&name=${search}&status=${status}&gender=${gender}&species=${species}`)
        // console.log(data.results)
        setLoading(false)
        setCharacters(data.results)
        setError(false)

        setInfo(data.info)
        // console.log(data.info)
      } catch (error) {
        console.log(error)
        setError(true)
        setLoading(false)
        
      }

     }
    
     fetchCharacters()
  
  },[page,search,status,species,gender,error]);


  return (
    <>
     <Container  minH={'100vh'} maxW={'container.xl'} >
      {loading ? <Loader/> : <>
      <h1 className='text-center my-4' style={{'fontWeight':'900'}}><span style={{'color':'crimson'}}>Refren</span> Rick & Morty</h1>
      <div className="container">
        <div className="row">
          <Filters  setStatus={setStatus} setGender={setGender} setSpecies={setSpecies} setPage={setPage}/>

        <div className="col-8 "  >
      <Search setSearch={setSearch} setPage={setPage} search={search}/>
          <div className="row">
          <VStack p={'2'} >
       

    
      <HStack wrap={'wrap'} justifyContent={'space-evenly'}>

     
        {(!error? <CharacterCard  characters={characters} /> : <NotFound /> )}
      
     
      </HStack>
     
      <Pagination setPage ={setPage}  info={info} page={page}/>
      </VStack>


          </div>

        </div>
        </div>
      </div>
     
     

      </>}
     </Container>
    </>
  )
}



export default Characters
