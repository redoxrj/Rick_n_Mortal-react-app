import { Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const DimensionText = ({api}) => {
    // console.log(api)

    const [data, setData] = useState({}) 
    
    const getDetails =async()=>{
        try {
            const {data} = await axios.get(api)
        setData(data)
        // console.log(data)
        // console.log(data.dimension)
            
        } catch (error) {
            console.log(error)
            
        }
        

    }
    useEffect(() => {
        getDetails()
     
    },[api]);
  return (
    <>
    <Text size={'md'} noOfLines={'1'}>Dimension : {data.dimension?data.dimension:'Not Found'}</Text>
    </>
  )
}

export default DimensionText
