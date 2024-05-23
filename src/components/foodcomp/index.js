import React from 'react'
import "./styles.scss"
import { UilMapMarker } from '@iconscout/react-unicons'
export default function Index(props) {
  return (
    <div className='food_comp'>
        <div className='food_top'>
            </div>
            <div className='food_bottom'>
               <div className='infos-div'> 
                  <span>
                    Bosco
                  </span>
                  <div className='loca-div'>
                    <span>
                      2.5 KM
                    </span>
                    <UilMapMarker size="25" color="orange" />
                  </div>
              </div>
              <div className='categ-div'>
                 <span>
                   Greece
                  
                  </span>
                  {" . "}
                  <span>
                    Cocktail

                    </span>
                    {" . "}

                    <span>
                        Tajins

                      </span> 
                      {" . "}

                      <span>
                        Tajins
                      </span> 
                </div>
            </div>  
    </div>
  )
}
