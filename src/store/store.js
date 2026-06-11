import { configureStore } from "@reduxjs/toolkit";
import listaReducer from "../features/ListaComprasSilce";
import CategoriasReducer from "../features/CategoriasSlice";
import ProductosReducer from "../features/ProductosSlice";
import UsuariosReducer from "../features/UsuariosSlice";
import ItemsReducer from "../features/ItemsSlice";
import EstadisticasReducer from "../features/EstadisticasSlice";

export const store = configureStore({ //puntero a store
    reducer:{ //partes de store
        listasSlice:listaReducer,
        CategoriasSlice:CategoriasReducer,
        ProductosSlice:ProductosReducer,
        UsuariosSlice:UsuariosReducer,
        ItemsSlice:ItemsReducer,
        EstadisticasSlice:EstadisticasReducer
    }
})