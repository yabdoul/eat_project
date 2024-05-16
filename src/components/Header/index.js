import React from 'react'
import './styles.scss'
import Avatar from '@mui/material/Avatar';
import { deepOrange, deepPurple } from '@mui/material/colors';
import { UilBars ,UilUserCircle } from '@iconscout/react-unicons'
import { VeatLogo } from '../../assets/images';
export default function index() {
  function stringToColor(string) {
    let hash = 0;
    let i;
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }
  
    let color = '#';
  
    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    return color;
  }
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  }
  return (
<div className='navbar'>
      <UilBars size='30' color='#407BFF' /> 
      <img src={VeatLogo}/>
      <Avatar {...stringAvatar('Abdoul Youssef')} />
</div>
  )
}
