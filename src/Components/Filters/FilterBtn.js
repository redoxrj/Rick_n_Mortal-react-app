import React from 'react'

const FilterBtn = ({item,index,name,task,setPage}) => {
  return (
    <>
    <style jsx='true'>
        {`

        .x:checked + label{
            background-color: #0b5ed7;
            color : white;

        }
        input[type="radio"]{
            display : none
        }
        `}

    </style>
    <div className="form-check ">
  <input onClick={()=>{
    setPage(1);
    task(item.toLowerCase());
  }} className="form-check-input x" type="radio" name="flexRadioDefault" id={`${name}-${index}`}/>
  <label className="btn btn-outline-primary" htmlFor={`${name}-${index}`}>{item}</label>
</div>


      
    </>
  )
}

export default FilterBtn
