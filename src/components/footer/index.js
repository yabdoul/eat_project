import React from 'react';  
import { UilEstate,UilHeart,UilShoppingBasket,UilRestaurant,UilUser} from '@iconscout/react-unicons' ; 
import './styles.scss'  ; 
import { Link } from 'react-router-dom';
export default function index() {
  return (
    <div className='footer-main'>
        <Link to=''>
        <UilEstate/> 
        </Link>
        <Link>
        <UilHeart/>
        </Link>
        <Link>
        <UilRestaurant/>
        </Link>
        <Link>
        <UilShoppingBasket/> 
        </Link>
        <Link>
          <UilUser/>
        </Link>
    </div>
  )
}
