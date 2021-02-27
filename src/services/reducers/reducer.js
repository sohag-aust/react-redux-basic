import {ADD_TO_CART} from '../constants';

const initialState = {
    cardData:[]
}

export default function cardItems(state=initialState, action){
    switch(action.type) {

        case ADD_TO_CART:
            console.warn('Action value in (add_to_cart) Reducer: ', action);
            return{
                ...state, // previous state
                cardData:action.data
            }
            break;
        
        default:
            return state   
    }
}