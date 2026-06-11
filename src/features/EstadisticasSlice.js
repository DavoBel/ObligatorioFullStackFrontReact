import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    opciones:null,
    ListasDatos:null,
    ProductosDatos:null
}

export const EstadisticasSlice = createSlice({
    name:"Estadisticas",
    initialState,
    reducers:{ //funciones que modifican el slice
        setOpciones:(state, action)=>{
            state.opciones = action.payload
        },
        setListasDatos:(state, action)=>{
            state.ListasDatos = action.payload
        },
        setProductosDatos:(state, action)=>{
            state.ProductosDatos = action.payload
        }
    }
})

export const { setOpciones, setListasDatos, setProductosDatos } = EstadisticasSlice.actions;

export default EstadisticasSlice.reducer;