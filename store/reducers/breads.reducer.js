import { BREADS } from "../../data/breads";
import { FILTER_BREAD, SELECT_BREAD } from "../actions/bread.actions";


const INITIAL_STATE = {
    list: BREADS,
    filteredBreads: [],
    selected: null
}

const BreadReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case SELECT_BREAD:
            const breadIndex = state.list.findIndex(bread => bread.id === action.breadID);
            if(breadIndex === -1) return {...state}
            return {
                ...state,
                selected: state.list[breadIndex]
            }
        case FILTER_BREAD:
            return {
                ...state,
                filteredBreads: state.list.filter(bread => bread.category === action.categoryID)
            }
        default: 
            return { ...state }
    }
}

export default BreadReducer;