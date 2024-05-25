import React from 'react'
import "./styles.scss"
import { UilMapMarker ,UilHeart} from '@iconscout/react-unicons'
import ReactStars from "react-rating-stars-component"; 
export default function Index(props) {
  return (
    <div className='food_comp'>
        <div className='food_top'>
        <ReactStars
    count={5}
    // onChange={ratingChanged}
    size={15}
    activeColor="orange"
  />
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
                  <div className="descript-div">
                      <span>
                          {" 9:00PM --> 21:00AM"}
                        </span>
                        <span>
                            {"22 rue Gautier,Casablanca"}
                          </span>
                    </div>
                <div className='btn-div'> 
                    <button className='btn'>
                       Reserver
                    </button>
                    <UilHeart color='red' size="25"/> 
                  </div>
            </div>  
    </div>
  )
}
