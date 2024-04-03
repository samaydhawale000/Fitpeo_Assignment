import React from 'react'
import "../App.css";
import { Heading, Text } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import SideNavButton from './SideNavButton';

export default function SideNavigation() {
    const navList = ['Dashboard', 'Product', 'Customers', 'Income', 'Promote', 'Help']
  return (
    <div id='SideNavigation'>
      <Heading fontSize='24px' fontWeight='500' > <FontAwesomeIcon icon={faGear} /> Dashboard</Heading>
      <div style={{marginTop:'50px', height:'74vh'}}>
      {navList.map((e)=>{
        return <SideNavButton navListname = {e}/>
      })}
      </div>
      <div className= 'profileClass'>
        <img src="https://i.pinimg.com/736x/04/59/df/0459df7b4b1a4a42c676584e5e865748.jpg" alt="profile" className='profileImage'/>
        <div >
           <Text fontSize='14px' color={'#f2f6ff'} marginLeft={'20px'}>Samay</Text>
           <Text fontSize='11px' color={'#9fb6ed'} marginLeft={'20px'} marginTop='-2px'>Software Engineer</Text>
        </div>
        <FontAwesomeIcon icon={faChevronDown} color='#6c7da6'/>
      </div>
    </div>
  )
}
