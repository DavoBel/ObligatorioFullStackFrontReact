import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    usuarios:[],
    usuarioAModificar:null,
    page:1
}

export const UsuariosSlice = createSlice({
    name:"Usuarios",
    initialState,
    reducers:{ //funciones que modifican el slice
        cargarUsuarios:(state, action) => {
            state.usuarios = action.payload
        },
        eliminarUsuario:(state, action) => {
            const {userId} = action.payload
            state.usuarios = state.usuarios.filter(u => u._id != userId)
        },
        setUsuarioAModificar: (state, action) =>{
            state.usuarioAModificar = action.payload
        },
        actualizarUsuario:(state, action) => {
            const actualizado = action.payload;
            const pos = state.usuarios.findIndex(u => u._id == actualizado._id)
            state.usuarios[pos] = actualizado;
        },
        setPage:(state, action)=>{
            state.page = action.payload
        }
    }
})

export const { cargarUsuarios, eliminarUsuario, setUsuarioAModificar, actualizarUsuario, setPage } = UsuariosSlice.actions;

export default UsuariosSlice.reducer;
