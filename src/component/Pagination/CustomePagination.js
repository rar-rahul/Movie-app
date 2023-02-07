import React from 'react'
import Pagination from '@mui/material/Pagination';

const CustomePagination = ({setPage,numofpages=10}) => {
    
    const handlePageCHange = (page) => { 
        setPage(page);
        window.scroll(0,0)
    }

  return (
    <div>
        <Pagination count={numofpages} onChange={(e) => handlePageCHange(e.target.textContent)}/>
    </div>
  )
}

export default CustomePagination