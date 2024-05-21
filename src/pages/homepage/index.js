import React from 'react'
import './styles.scss'
import { UilBell,UilArrowRight} from '@iconscout/react-unicons' ; 
export default function Index() {
  return (
    <div className='page-container'>
      <div className='home-top'> 
          <p>
            Bienvenue ,<br/>
              <span>Pierre san-jean</span>
          </p>
          <UilBell id='bell' size='30' color='orange' /> 
        </div>
        <div className='home-body'> 
            <div className='body-ele food-ele'> 
                  <span> 
                    Start Eating , Journey ! 
                  </span>
                  <UilArrowRight size='50' color='orange' />
              </div>
              <div className='body-ele'> 

              </div>
              <div className='body-ele'> 
              </div>
              <div className='body-ele'> 
              </div>
          </div>
    </div>
  )
}
