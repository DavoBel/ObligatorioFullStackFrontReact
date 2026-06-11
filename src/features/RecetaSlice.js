import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    receta: null
}

export const RecetaSlice = createSlice({
    name:"Receta",
    initialState,
    reducers:{
        setReceta: (state, action) => {
            state.receta = action.payload;
        }
    }
})

export const { setProductos } = ProductosSlice.actions;

export default ProductosSlice.reducer;


