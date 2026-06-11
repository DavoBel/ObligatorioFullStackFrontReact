import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itemAModificar: null,
    idLista:null
}

export const ItemsSlice = createSlice({
    name:"Items",
    initialState,
    reducers:{ //funciones que modifican el slice
        setItemAModificar:(state, action) =>{
            state.itemAModificar = action.payload;
        }
    }
})

export const { setItemAModificar } = ItemsSlice.actions;

export default ItemsSlice.reducer;