import React from 'react'
import './styles.scss'
import { UilBell } from '@iconscout/react-unicons' ; 
export default function Index() {
  return (
    <div className='page-container'>
      <div className='home-top'> 
          <p>
            Bienvenue ,<br/>
              <span>Pierre san-jean</span>
          </p>
          <UilBell id='bell' size='30' color='black' /> 
        </div>
    </div>
  )
}
