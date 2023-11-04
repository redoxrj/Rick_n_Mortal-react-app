import { Heading, Image, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Card.scss'

const CharacterCard = ({characters}) => { 
  let display ;
  if(!characters){
    display = 'oops! No characters Found '
  }
  else{
    display = characters.map((item)=>( 
          <Link to={`/character/${item.id}`} key={item.id}>
<VStack className='button-85' position={'relative'} w={'48'}  p={'4'} m={'4'} borderRadius={'20px'} shadow={'lg'} transition={'all 0.5s'} css={
    {"&:hover":{
        transform : "scale(1.2)"
    }}
    
}>
    <Image borderRadius={'1rem'} src={item.image} w={'40'} h={'40'} objectFit={'contain'}/>

    <Heading fontSize={'lg'} noOfLines={'2'}>{item.name}</Heading>
    <Text fontSize={'sm'} noOfLines={'2'} textAlign={'center'} marginBottom={'0'} >Location : {item.location.name}</Text>
   
    <Text fontSize={'sm'} noOfLines={'2'} textAlign={'center'} marginBottom={'0'} >Gender : {item.gender}</Text>
    <Text fontSize={'sm'} noOfLines={'2'} textAlign={'center'} marginBottom={'0'} >Species : {item.species}</Text>
    
    {/* IIFE */}
    {(()=>{
      if(item.status==='Alive'){
    return <span className="badge fs-6 text-bg-success position-absolute">{item.status}</span>

      }
      else if(item.status==='Dead'){
    return <span className="badge fs-6 text-bg-danger position-absolute">{item.status}</span>

      }
      else{
    return <span className="badge fs-6 text-bg-secondary position-absolute">{item.status}</span>

      }
    })()}
   
    
    
 
</VStack>

</Link>

    ))
  }

  return (
    <>{display}</>

 
  )
}



export default CharacterCard
