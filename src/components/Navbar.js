import React from 'react';
import { Button, Toolbar, AppBar } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';


const MyToolbar = styled( Toolbar )( {
  background: 'black',
  color: 'white',
  paddingBottom: '12px',
} );

const NavLink = ( props ) => {
  
  function handleClick( ref ) {
    const element = document.getElementById( ref );
    
    element.scrollIntoView( {
      behavior: 'smooth',
      block: 'start',
    } );
  }
  
  return (
    <Button
      style={{ color: 'white', marginRight: '2%' }}
      onClick={() => handleClick( props.label )}
    >
      {props.label}
    </Button>
  )
}

const NavBar = () => {
  return (
    <div>
      <AppBar position="static">
        <MyToolbar>
          <NavLink label={'About'}/>
          <NavLink label={'Experience'}/>
          <NavLink label={'Projects'}/>
          <NavLink label={'Contact'}/>
        </MyToolbar>
      </AppBar>
    </div>
  )
}
export default NavBar;