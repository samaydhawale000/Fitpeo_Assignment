import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faTags } from '@fortawesome/free-solid-svg-icons';
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import { faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons';
import { Text } from "@chakra-ui/react";

export default function SideNavButton({ navListname }) {

  const handleIcons = (name)=>{
    if(name =='Dashboard'){
      return <FontAwesomeIcon icon={faHouse} />
    }
    else if(name =='Product'){
      return <FontAwesomeIcon icon={faBagShopping} />
    }
    else if(name =='Customers'){
      return <FontAwesomeIcon icon={faUser} />
    }
    else if(name =='Income'){
      return <FontAwesomeIcon icon={faMoneyBill1Wave} />
    }
    else if(name =='Promote'){
      return <FontAwesomeIcon icon={faTags} />
    }
    else{
      return <FontAwesomeIcon icon={faCircleInfo} />
    }
  }
  return (
    <div>
      <NavLink
        style={{
          display: "block",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "10px",
          fontSize:'14px',
          backgroundColor: navListname =='Dashboard' && '#2d2d69',
        }}
        className='SideNavButton'
        to={`/${navListname}`}
      >
        <div style={{display:'flex'}}>
         <Text marginRight={'14px'}>{handleIcons(navListname)}</Text>
         <Text>{navListname}</Text>
        </div>
      </NavLink>
    </div>
  );
}
