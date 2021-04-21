export const initialState = {
  user: null,
  cart: {},
  products: {},
};

export const Reducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.payload,
      };

    case "ADD_TO_CART":
      return {
        ...state,
        cart: {
          ...state.cart,
          [action.proId]: state.cart.hasOwnProperty(action.proId)
            ? state.cart[action.proId] + 1
            : 1,
          // [action.proId]: 1,
        },
      };

    case "REMOVER_FROM_CART":
      let cart = state.cart;
      delete cart[action.proId];
      console.log(state.cart);
      return {
        ...state,
        cart: cart,
      };

    case "SET_PRODUCTS_FROM_DB":
      return {
        ...state,
        products: action.data,
      };
    default:
      return state;
  }
};

// firebase
//   .database()
//   .ref("Category")
//   .orderByChild("SubCategoryParentId")
//   .equalTo("Pass your Subcategory Id here");
