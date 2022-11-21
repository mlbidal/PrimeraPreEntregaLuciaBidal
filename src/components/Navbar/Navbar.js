import React from 'react'
import Buttons from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget';
import {Button, Box, Typography} from '@mui/material'

const Navbar = () => {

    const navBarButton = ['Products', 'About Us', 'Contact Us' ];
    console.log('holaakjkj')

  return (
    <>
    <Box style={{display:'flex', flexDirection:'row'}}>
    <Typography style={{display:'flex' ,justifyContent:'flex-start', alignItems:'center', fontWeight:'bold', fontSize:16, width:'70%', marginLeft:10}}>MaluCommerce</Typography>
    <Box style={{display:'flex', flexDirection:'row', width:'30%',height:60, justifyContent:'flex-end', alignItems:'center'}}>
    {
    navBarButton.map( (m, i) => { 
        return <Buttons value={m} key={i}/>
    })}
    <CartWidget/>
    </Box>
    </Box>
    </>
  )
}

export default Navbar