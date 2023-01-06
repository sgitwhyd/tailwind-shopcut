import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "ADD_TO_CART":
          return {
            ...state,
            cart: [
              ...state.cart,
              {
                ...action.payload,
                quantity: 1,
              },
            ],
          };
        case "REMOVE_FROM_CART":
          return {
            ...state,
            cart: state.cart.filter((item) => item.id !== action.payload.id),
          };
        case "INCREASE_QUANTITY":
          return {
            ...state,
            cart: state.cart.filter((item) =>
              item.id === action.payload.id
                ? (item.quantity = action.payload.quantity + 1)
                : item.quantity
            ),
          };
        case "DECREASE_QUANTITY":
          return {
            ...state,
            cart: state.cart.filter((item) =>
              item.id === action.payload.id
                ? (item.quantity = action.payload.quantity - 1)
                : item.quantity
            ),
          };
        case "CLEAR_CART":
          return [];
        default:
          return state;
      }
    },
    {
      cart: [],
    }
  );

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
