import React from 'react'
import Pagination from '@mui/material/Pagination';

const CustomePagination = ({setPage,numofpages=10}) => {
    
    const handlePageCHange = (page) => { 
        setPage(page);
        window.scroll(0,0)
    }

  return (
    <div
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
      marginTop: 10,
      color:"#fff"
    }}
  >
        <Pagination count={numofpages} onChange={(e) => handlePageCHange(e.target.textContent)}/>
    </div>
  )
}

export default CustomePagination