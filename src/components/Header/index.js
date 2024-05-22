import React from 'react'
import "./styles.scss" ; 
import { UilArrowLeft } from '@iconscout/react-unicons' ; 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
export default function Header() {
  const  history = useHistory(); 
  return (
    <div className='head_container'>
        <UilArrowLeft size='40' onClick={()=> history.goBack()} color='black' />
    </div>
  )
}
