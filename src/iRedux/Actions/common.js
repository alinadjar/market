
import { toggleLOADING, showBasketSidePanel } from './types';

export const toggleLoadingState = () => ({
    type: toggleLOADING
})

export const toggleBasketSidePanel = () => ({
    type: showBasketSidePanel
})