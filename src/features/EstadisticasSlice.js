import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    opciones:null,

    ListasDatosTotales:null,
    ProductosDatosTotales:null,

    ListasDatosPlus:null,
    ProductosDatosPlus:null,

    ListasDatosPremium:null,
    ProductosDatosPremium:null
}

export const EstadisticasSlice = createSlice({
    name:"Estadisticas",
    initialState,
    reducers:{ //funciones que modifican el slice
        setOpciones:(state, action)=>{
            state.opciones = action.payload
        },
        setListasDatosTotales:(state, action)=>{
            state.ListasDatosTotales = action.payload
        },
        setProductosDatosTotales:(state, action)=>{
            state.ProductosDatosTotales = action.payload
        },
        setListasDatosPlus:(state, action)=>{
            state.ListasDatosPlus = action.payload
        },
        setProductosDatosPlus:(state, action)=>{
            state.ProductosDatosPlus = action.payload
        },
        setListasDatosPremium:(state, action)=>{
            state.ListasDatosPremium = action.payload
        },
        setProductosDatosPremium:(state, action)=>{
            state.ProductosDatosPremium = action.payload
        }
    }
})

export const { 
    setOpciones, 
    setListasDatosTotales, setProductosDatosTotales, 
    setListasDatosPlus, setProductosDatosPlus, 
    setListasDatosPremium, setProductosDatosPremium 
} = EstadisticasSlice.actions;

export default EstadisticasSlice.reducer;