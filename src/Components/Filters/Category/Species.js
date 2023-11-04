import React from 'react'
import FilterBtn from '../FilterBtn';

const Species = ({setSpecies,setPage}) => {
    let species = [
        "Human",
        "Alien",
        "Humanoid",
        "Poopybutthole",
        "Mythological",
        "Unknown",
        "Animal",
        "Disease",
        "Robot",
        "Cronenberg",
        "Planet",
      ];
  return (
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Species
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body d-flex flex-wrap gap-3">
      {species.map((item,i)=>(

<FilterBtn task={setSpecies} setPage={setPage} key={i} item={item} index={i} name={'species'}/>
))}
      </div>
    </div>
  </div>
  )
}

export default Species
