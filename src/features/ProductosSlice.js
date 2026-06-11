import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    productos: [],
    productoAModificar:null,
    page:1
}

export const ProductosSlice = createSlice({
    name:"Productos",
    initialState,
    reducers:{
        setProductos: (state, action) => {
            state.productos = action.payload;
        },
        setPage:(state, action) =>{
            state.page = action.payload;
        },
        setProductoAModificar:(state, action) =>{
            state.productoAModificar = action.payload;
        },
        eliminarProducto:(state, action) =>{
            const prodId = action.payload;
            state.productos = state.productos.filter(p => p._id != prodId);
        },
        agregarProducto: (state, action)=>{
            const producto = action.payload
            state.productos.push(producto);
        },
        actualizarProducto:(state, action) =>{
            const producto = action.payload;
            const pos = state.productos.findIndex(p => p._id === producto._id);
            state.productos[pos] = producto;
        }
    }
})

export const { setProductos, setPage, setProductoAModificar, eliminarProducto, agregarProducto, actualizarProducto } = ProductosSlice.actions;

export default ProductosSlice.reducer;