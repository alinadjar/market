import { toggleLOADING, showBasketSidePanel, SET_TXT_4_TOAST } from '../Actions/types';



const initialState = {
    loading: false,
    showBasketPanel: false,
    myToastText: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case toggleLOADING:
            return {
                ...state,
                loading: !state.loading
            }
        case showBasketSidePanel:
            return {
                ...state,
                showBasketPanel: !state.showBasketPanel
            }
        case SET_TXT_4_TOAST:
            return {
                ...state,
                myToastText: action.payload
            }
        default:
            return state;
    }
}