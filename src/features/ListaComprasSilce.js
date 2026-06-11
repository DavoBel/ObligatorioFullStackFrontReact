import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  listas: [],
  ListaAModificar: null,
  page:1
}

export const ListasSlice = createSlice({
  name: "ListasDeCompras",
  initialState,
  reducers: {
    setListas: (state, action) => {
      state.listas = action.payload;
    },
    setListaAModificar:(state, action)=>{
      state.ListaAModificar = action.payload;
    },
    agregarLista:(state, action)=>{
      state.listas.push(action.payload);
    },    
    actualizarLista:(state, action)=>{
      const {listaId, ListaActualizada} = action.payload;
      const pos = state.listas.findIndex(lista => lista._id == listaId);
      state.listas[pos] = ListaActualizada;
    },
    eliminarLista:(state, action)=>{
      const {listaId} = action.payload;
      state.listas = state.listas.filter(lista => lista._id != listaId);
    }, 
    actualizarItem: (state, action) => {
      const {listaId, ItemActualizado} = action.payload;
      const lista = state.listas.find(lista => lista._id == listaId);
      if (lista) {
        const pos = lista.items.findIndex(item => item._id == ItemActualizado._id);
        if (pos != -1) {
          lista.items[pos] = ItemActualizado;
        }
      }
    },
    eliminarItem: (state, action) => {
      const { listaId, itemId } = action.payload;
      const lista = state.listas.find(lista => lista._id == listaId);
      if (lista) {
        lista.items = lista.items.filter(item => item._id != itemId);
      }
    },
    agregarItem: (state, action) => {
        const { listaId, nuevoItem } = action.payload;
        const lista = state.listas.find(lista => lista._id == listaId);
        if(lista){
          lista.items.push(nuevoItem);
        }
    },
    setPage: (state, action) => {
      state.page = action.payload;
    }
  }
})


export const { setListas, setListaAModificar, agregarLista, actualizarLista, eliminarLista, actualizarItem, eliminarItem, agregarItem, setPage } = ListasSlice.actions;

export default ListasSlice.reducer;