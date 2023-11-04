import React from 'react'
import ReactPaginate from 'react-paginate';


const Pagination = ({setPage,page,info}) => {
  const {pages} = info
  
  return (
    <>
    <ReactPaginate className='pagination justify-content-center align-items-center gap-4 m-4'  nextClassName={'btn btn-primary'} pageCount={pages} previousClassName={'btn btn-primary'} previousLabel={'Prev'} pageClassName ={'page-item'} pageLinkClassName={'page-link'} onPageChange ={(e)=>{setPage(e.selected+1)}} activeClassName={'active'} forcePage ={page===1?0: page-1}
    />
    </>
   
  )
}

export default Pagination
