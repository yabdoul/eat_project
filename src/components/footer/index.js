import React from 'react';  
import { UilEstate,UilShoppingCartAlt,UilBell,UilCommentAlt,UilCalender} from '@iconscout/react-unicons' ; 
import './styles.scss'  ; 
import { Link } from 'react-router-dom';
export default function index() {
  return (
    <div className='footer-main'>
        <Link>
        <UilEstate/> 
        </Link>
        <Link>
        <UilShoppingCartAlt/> 
        </Link>
        <Link>
        <UilCommentAlt/>
        </Link>
        <Link>
        <UilCalender/>
        </Link>
        <Link>
        <UilBell/> 
        </Link>
    </div>
  )
}
