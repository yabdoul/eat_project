import {PANIER, PRODUCT,DELETE_ITEM,ADDED_ITEM,SELECTED_PRODUCT} from "../constants/actions";
const INITIAL_STATE = {
 listeproduct : [
    { id:'1',name:'Huileargane 20 ml ',price:'40',description:'lorem ipsum dorum dakjdkad kadjkadjkadjakjdladl lajdaldjlakdlajdk ladjakldjalkdjkadjk ladkjaldjkajdlajd jdaljdaldljakjd adjlad ',quantity:0},
    {id:'3', name:'Huileargane 20 ml',price:'45',description:'orem ipsum dorum dakjdkad kadjkadjkadjakjdladl lajdaldjlakdlajdk ladjakldjalkdjkadjk ladkjaldjkajdlajd jdaljdaldljakjd adjlad ',quantity:0},
    {id:'4', name:'Huileargane 20 ml',price:'45',description:'lorem ipsum dorum dakjdkad kadjkadjkadjakjdladl lajdaldjlakdlajdk ladjakldjalkdjkadjk ladkjaldjkajdlajd jdaljdaldljakjd adjlad ',quantity:0},
    {id:'5', name:'Huileargane 20 ml',price:'45',description:'orem ipsum dorum dakjdkad kadjkadjkadjakjdladl lajdaldjlakdlajdk ladjakldjalkdjkadjk ladkjaldjkajdlajd jdaljdaldljakjd adjlad ',quantity:0},
    {id:'6', name:'Huileargane 20 ml',price:'45',description:'orem ipsum dorum dakjdkad kadjkadjkadjakjdladl lajdaldjlakdlajdk ladjakldjalkdjkadjk ladkjaldjkajdlajd jdaljdaldljakjd adjlad ',quantity:0},
    {id:'7', name:'Huileargane 20 ml',price:'45',description:'orem ipsum dorum dakjdkad kadjkadjkadjakjdladl lajdaldjlakdlajdk ladjakldjalkdjkadjk ladkjaldjkajdlajd jdaljdaldljakjd adjlad ',quantity:0},
    {id:'8', name:'Huileargane 20 ml',price:'45',description:'orem ipsum dorum dakjdkad kadjkadjkadjakjdladl lajdaldjlakdlajdk ladjakldjalkdjkadjk ladkjaldjkajdlajd jdaljdaldljakjd adjlad  ',quantity:0},
    {id:'9', name:'Huileargane 20 ml',price:'45',description:'lorem ipsum dorum ',quantity:0},
    {id:'10', name:'pHuileargane 20 ml',price:'45',description:'lorem ipsum dorum ',quantity:0},
    {id:'11', name:'Huileargane 20 ml',price:'45',description:'lorem ipsum dorum ',quantity:0},
    {id:'12', name:'pHuileargane 20 ml',price:'45',description:'lorem ipsum dorum ',quantity:0}
] , 
listepanier : []  , 
isadded : false,
selected_prod : [] , 
} 
function product(state = INITIAL_STATE, action) {
    switch (action.type) 
    {
        case PRODUCT:
            return {...state,listeproduct:action.payload}
        case PANIER : 
            return {...state ,listepanier: [...state.listepanier, action.payload]}
        case DELETE_ITEM :
            const updatedList = state.listepanier.filter(item => item.id !== action.payload.id);
            return { ...state,listepanier: updatedList };
            case ADDED_ITEM : 
            return {...state ,isadded:action.payload} ; 
        case SELECTED_PRODUCT : 
        return { ...state, selected_prod: action.payload };
        default:
            return state;
    }
}
export default product;