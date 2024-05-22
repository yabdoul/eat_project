import React from 'react'
import './styles.scss'
import { UilBell,UilArrowRight} from '@iconscout/react-unicons' ; 
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
// import { useRote } from 'react-router-dom/cjs/react-router-dom';
// useHis
export default function Index() {
  const history = useHistory(); 
  const handleroot =(route,e)=>
  {
    history.push(route);
  } 
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
            <div className='body-ele food-ele' onClick={(e)=>{
                handleroot("foodpage",e); 
            }}> 
                  <span> 
                    Start Eating , Journey ! 
                  </span>
                  <UilArrowRight size='50' color='orange' />
              </div>
              <div className='body-ele places-ele' onClick={(e)=> 
              {
                handleroot("places",e) ; 
              }
              }> 
              < span>
                Places to Discover 
              </span> 
              <UilArrowRight size='50' color='orange' />
              </div>
              <div className='body-ele hotels-ele'> 
                <span>
                    Hotels and hostels 
                  </span> 
                  <UilArrowRight size='50' color='orange' />
              </div>
              <div className='body-ele'> 
              </div>
          </div>
    </div>
  )
}
