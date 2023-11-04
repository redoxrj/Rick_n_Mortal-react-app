import React from 'react'
import Status from './Category/Status'
import Gender from './Category/Gender'
import Species from './Category/Species'

const Filters = ({setStatus,setPage,setSpecies,setGender}) => {
  return (
    <div className="col-3" >
      <div className="text-center fw-bold fs-4 mb-2">Filters</div>
    
      <button onClick={()=>{
        console.log('helloo')
        setPage(1)
        setStatus('')
        setSpecies('')
        setGender('')
        window.location.reload(false);
      }} className='btn btn-primary m-auto d-block'>clear filters</button>

      <div className="accordion" id="accordionExample">
        <Status setStatus={setStatus} setPage={setPage}/>
        <Gender setPage={setPage} setGender={setGender} />
        <Species setSpecies={setSpecies} setPage={setPage}/>

 
  
</div>
      </div>


  )
}

export default Filters
