import { toggleLOADING, showBasketSidePanel } from '../Actions/types';



const initialState = {
    loading: false,
    showBasketPanel: false
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
        default:
            return state;
    }
}