import React from 'react'
import {Button, Box} from '@mui/material'
const Buttons = ({value}) => {

  return (

    <>
    <Box>
       <Button variant='contained' style={{height:30, width:70,backgroundColor:'#DBDADA',color:'black',fontSize:8, margin:6}}>{value}</Button>
    </Box>
    </>
  )
}

export default Buttons