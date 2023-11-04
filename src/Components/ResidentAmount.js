import { Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Loader from './Loader'

const ResidentAmount = ({api}) => {
    // console.log(api)

    const [data, setData] = useState({}) 
  const [loading, setLoading] = useState(true) 

    
    const getDetails =async()=>{
        try {
            const {data} = await axios.get(api)
        setData(data)
        // console.log(data)
        // console.log(data.residents)
        setLoading(false)
            
        } catch (error) {
            console.log(error)
            
        }
        

    }
    useEffect(() => {
        getDetails()
     
    },[]);
  return (
    <>
    {loading ? <Loader/> : <>
    <Text size={'md'} noOfLines={'1'}>Amount of residents : {data.residents.length}</Text>
    </> }
    </>
    
  )
}

export default ResidentAmount
