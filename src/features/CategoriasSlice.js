import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    categorias:[],
    categoriaAModificar:null,
    page:1
}

export const CategoriasSlice = createSlice({
    name:"Categorias",
    initialState,
    reducers:{ //funciones que modifican el slice
        cargarCategorias:(state, action)=>{
            state.categorias = action.payload
        },
        setPage:(state, action)=>{
            state.page = action.payload
        },
        eliminarCategoria:(state, action)=>{
            const {catId} = action.payload
            state.categorias = state.categorias.filter(c => c._id != catId)
        },
        actualizarCategoria:(state, action) => {
            const actualizada = action.payload;
            const pos = state.categorias.findIndex(u => u._id == actualizada._id)
            state.categorias[pos] = actualizada;
        },
        setCategoriaAModificar:(state, action)=>{
            state.categoriaAModificar = action.payload
        },
        agregarCategoria: (state, action) =>{
            const {cat} = action.payload
            state.categorias.push(cat);
        }

    }
})

export const { cargarCategorias, eliminarCategoria, setCategoriaAModificar, setPage, actualizarCategoria, agregarCategoria } = CategoriasSlice.actions;

export default CategoriasSlice.reducer;