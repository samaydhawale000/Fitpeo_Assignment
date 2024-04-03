import React from 'react'
import "../App.css";
import contructionImage from '../Images/contructionImage.svg'
import { Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function PageNotFound() {
  return (
    <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', height:'100vh'}}>
     <div style={{width:'60%'}}>
      <Link to='/' style={{fontWeight:'600'}}>← Go Back</Link>
      <img src={contructionImage} alt="image" style={{width:'60%', margin:'auto'}}/>
     <Heading textAlign='center' marginTop='20px'>Page is under construction </Heading>
     </div>
    </div>
  )
}
