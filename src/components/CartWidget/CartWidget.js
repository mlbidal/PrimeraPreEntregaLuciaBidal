import React from 'react'
// import {Box} from "@material-ui/core"
import {Button, Box, Typography} from '@mui/material'

const CartWidget = () => {
  return (
    <Box style={{display:'flex', flexDirection:'row', alignItems:'center'}}>
        <Button variant='outlined' style={{width:4, height:33}}>
            <Box>
            <img src={require('./carrito.png')} alt={'carrito'} style={{scale:'5%' }}></img>
            </Box>
        <Box style={{width:8, height:8, marginRight:10,}}>{'1'}</Box>
        
        </Button>
    </Box>
  )
}

export default CartWidget