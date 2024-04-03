import React from 'react'
import "../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { faCircleDollarToSlot } from '@fortawesome/free-solid-svg-icons';
import { faPiggyBank } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { Text } from '@chakra-ui/react';

export default function DashboardInfoCards({cardDetails}) {
  const handleIcons=()=>{
    if(cardDetails.image === 'faFileLines'){
      return <FontAwesomeIcon icon={faFileLines} size='lg' style={{color:'#a301fe'}}/>
    }
    else if(cardDetails.image === 'faCircleDollarToSlot'){
      return <FontAwesomeIcon icon={faCircleDollarToSlot} size='lg'  style={{color:'#07aa4d'}}/>
    }
    else if(cardDetails.image === 'faPiggyBank'){
      return <FontAwesomeIcon icon={faPiggyBank} size='lg'  style={{color:'#0b5bc1'}}/>
    }
    return <FontAwesomeIcon icon={faBagShopping} size='lg'  style={{color:'#d90114'}}/>
  }
  return (
    <div className='DashboardInfoCards'>
      <div className='cardImage' style={{backgroundColor: cardDetails.backgroundColor}}>
      {handleIcons()}
      </div>

      <div style={{width:'130px'}}>
        <Text color={'gray'} fontSize={'14px'} >{cardDetails.type}</Text>
        <Text fontSize={'22px'} fontWeight={600}>{cardDetails.dollars}</Text>
        <Text color={cardDetails.textColor} fontSize={'14px'} fontWeight={500}>{cardDetails.hike} <span style={{color:'black', fontWeight:'normal'}}>this month</span></Text>
      </div>
    </div>
  )
}
