import React from 'react'
import "./styles.scss"
import { UisStar } from '@iconscout/react-unicons-solid'
export default function Index() {
  return (
    <div className='food_comp'>
        <div className='food_top'>

            </div>
            <div className='food_bottom'>
                <div className='rate-div'>
                <UisStar color="orange" size="25" />
                {"5  (52)"}
                </div>
                <div className='price-div'>
                    <span>
                        71MAD/invite
                        </span>
                </div>
            </div> 
    </div>
  )
}
