import { URL_API } from "../../constants/DataBase";

export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const CONFIRM_CART = "CONFIRM_CART";

export const addItem = (item) => ({
  type: ADD_ITEM,
  item,
});

export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  itemID: id,
});

export const confirmCart = (payload) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${URL_API}/cart.json`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          date: Date.now(),
          items: { ...payload },
        }),
      });
    //   console.log(response);

      dispatch({
          type: CONFIRM_CART,
          confirm: true
      })
    } catch (e) {
    //   console.log(e.message);
    }
  };
};
