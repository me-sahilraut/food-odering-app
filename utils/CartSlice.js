import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "Cart",
  initialState: {
    items: [],
  },
  reducers: {
    addUser: (state, action) => {
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items.pop(action.payload);
    },
    clearItem: (state, action) => {
      state.items = [];
    },
    toggleMenu: (state) => {
      state.IsMenuOpen = !state.IsMenuOpen;
    },
    closeMenu: (state) => {
      state.IsMenuOpen = false;
    },
  },
});

export const { addUser, removeUser, addItem, removeItem, clearItem, toggleMenu, closeMenu } =
  CartSlice.actions;
export default CartSlice.reducer;
