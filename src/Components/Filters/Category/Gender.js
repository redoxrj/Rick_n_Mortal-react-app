import React from 'react'
import FilterBtn from '../FilterBtn'

const Gender = ({setPage,setGender}) => {
    let gender = ['female', 'male', 'genderless' ,'unknown']
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Gender
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
      {gender.map((item,i)=>(

<FilterBtn setPage={setPage} task={setGender} key={i} gender={gender} index={i} name={'gender'} item={item}/>
))}
        
      </div>
    </div>
  </div>
  
  )
}

export default Gender
