import { createSlice } from '@reduxjs/toolkit';


export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {  // Receives object with item name, image, cost
        const {name, image, cost} = action.payload;
        state.items.push({ name, image, cost, quantity: 1, });
        console.log(state.items);
    },
    
    removeItem: (state, action) => {  // Receives name of item to remove
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {  // Receives object with item name and quantity
        const {name, quantity} = action.payload;
        const itemToUpdate = state.items.find(item => item.name !== name)
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
