import React, { useEffect, useState } from 'react'
import Loader from './Loader.js';
import { Container, Divider,  Heading, Image,   Text, VStack } from '@chakra-ui/react';
import axios from 'axios'
import {api} from '../index'
import { useParams } from 'react-router-dom';
import EpisodeText from './EpisodeText.js';
import DimensionText from './DimensionText.js';
import ResidentAmount from './ResidentAmount.js';



const CharacterDetails = () => {
  const {id} = useParams()
  const [loading, setLoading] = useState(true)  
  const [character, setCharacter] = useState({}) 
  const [error, setError] = useState(false) 



 
  useEffect(() => {
  
    const fetchCharacter =async()=>{ 
     try {
       const {data} = await axios.get(`${api}/character/${id}`)
       
       setLoading(false)
       setCharacter(data)
      
      
     } catch (error) {
       setError(true)
       setLoading(false)
       
     }

    }
 

    fetchCharacter()
 
 },[id]);


  return (
    <Container maxW={'container.lg'}>
    {loading ? <Loader/> : <> 
    <VStack w={'full'}  p={'8'}  justifyItems={'flex-start'}>
      <VStack  w={'full'} p={'8'} alignItems={'flex-start'} boxShadow={'dark-lg'}>

    <Image  src={character.image} w={'full'} h={'60'} objectFit={'contain'}/>
    <Heading size={'lg'} noOfLines={'1'}>Name : {character.name}</Heading>
    <Text size={'lg'} noOfLines={'1'}>Species : {character.species}</Text>
    <Text size={'md'} noOfLines={'1'}>Gender : {character.gender}</Text>
    <Text size={'md'} noOfLines={'1'}>Status : {character.status}</Text>
    <Text size={'md'} noOfLines={'1'}>Origin Name : {character.origin.name}</Text>
    <DimensionText api={character.origin.url}/>
    <Text size={'md'} noOfLines={'1'}>Location : {character.location.name}</Text>
    
    <ResidentAmount api={character.location.url} />
    
    
    <Heading size={'md'} noOfLines={'1'}>Featured in  : {character.episode.length} Episodes</Heading>
   
    <Divider borderColor={'black'}/>
      <EpisodeText api={character.episode}/>

    </VStack>




    </VStack>
    
    </>}
    </Container>
  )
}





export default CharacterDetails
