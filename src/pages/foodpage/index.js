import React, { useEffect, useState }  from "react";
import "./styles.scss"
import { FoodComp } from "../../components";
const  FoodPage =()=>
{
const [test,setTest] = useState(" "); 

return(
<div className="food_page">
    <FoodComp/>
    <FoodComp/>
    <FoodComp/>
    <FoodComp/>
    v
</div>
)
}  
export default FoodPage ; 