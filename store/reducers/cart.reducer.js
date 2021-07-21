import { ADD_ITEM, DELETE_ITEM } from "../actions/cart.actions";

const INITIAL_STATE = {
    list: [],
    total: 0,
    confirm: false
}

const sumTotal = (list) =>
  list.map((item) => item.price * item.quantity).reduce((a, b) => a + b, 0);

const CartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case ADD_ITEM: {
            const itemIndex = state.list.findIndex(item => item.id === action.item.id);
            
            if(itemIndex === -1) {
              const item = { ...action.item, quantity: 1 }
              const updated = state.list.concat(item);  
              
              return {
                ...state,
                list: updated,
                total: sumTotal(updated),
              };
            }

            const updated = state.list.map(item => {
              if(item.id == action.item.id) {
                item.quantity++
              }
              return item;
            })

            return {
              ...state,
              list: updated,
              total: sumTotal(updated),
            };
        }
        case DELETE_ITEM:
          const newList = state.list.filter(
            (item) => item.id !== action.itemID
          );
            return {
                ...state,
                list: newList,
                total: sumTotal(newList)
            }
        default: return {...state}
    }
}

export default CartReducer;