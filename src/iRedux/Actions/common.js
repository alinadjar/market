
import { toggleLOADING, showBasketSidePanel, SET_TXT_4_TOAST } from './types';

export const toggleLoadingState = () => ({
    type: toggleLOADING
})

export const toggleBasketSidePanel = () => ({
    type: showBasketSidePanel
})

export const setTextForToast = (text) => ({
    type: SET_TXT_4_TOAST,
    payload: text
})