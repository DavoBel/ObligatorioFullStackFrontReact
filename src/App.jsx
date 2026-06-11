import { Provider } from 'react-redux'
import { store } from './store/store'
import { BrowserRouter, Routes, Route} from 'react-router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
//Cliente
import RutasClientes from "./components/publico/RutasCliente/RutasCliente"
import Login from './components/publico/Login/LoginPrincipal'
import Registro from './components/publico/Registro/RegistroPrincipal'
import ListasCompras from './components/publico/ListasCompras/ListasCompras'
import EditarListaPrincipal from './components/publico/EditarLista/EditarListaPrincipal'
import AgregarListaPrincipal from './components/publico/AgregarLista/AgregarListaPrincipal'
import ItemsListaPrincipal from './components/publico/ItemsLista/ItemsListaPrincipal'
import CardAgregarItemPrincipal from './components/publico/AgregarItem/CardAgregarItemPrincipal'
import ListaRecetasPrincipal from './components/publico/ListaRecetas/ListaRecetasPrincipal'
import IngredientesRecetasPrincipal from './components/publico/IngredientesRecetas/IngredientesRecetasPrincipal'
import CardNutricionPrincipal from './components/publico/DatosNutricionales/CardNutricionPrincipal'
import Estadisticas from './components/publico/Estadisticas/Estadisticas'
import Navbar from "./components/publico/Navbar/Navbar"
//Admin
import RutasAdmin from './components/admin/RutasAdmin/RutasAdmin'
import UsuariosPrincipal from './components/admin/Usuarios/UsuariosPrincipal'
import EditarUsuario from './components/admin/EditarUsuario/EditarUsuario'
import ProductosPrincipal from './components/admin/Productos/ProductosPrincipal'
import AgregarProductoPrincipal from './components/admin/AgregarProducto/AgregarProductoPrincipal'
import EditarProductoPrincipal from './components/admin/EditarProducto/EditarProductoPrincipal'
import CategoriasPrincipal from './components/admin/Categorias/CategoriasPrincipal'
import EditarCategoria from './components/admin/EditarCategoria/EditarCategoria'
import AgregarCategoriaPrincipal from './components/admin/AgregarCategoria/AgregarCategoriaPrincipal'
import EstadisticasAdmin from './components/admin/Estadisticas/EstadisticasAdmin'
import Sidebar from './components/admin/Sidebar/Sidebar'
//General
import RutasProtegidas from './components/publico/RutasProtegidas/RutasProtegidas'
import NotFound from './components/publico/NotFound/NotFound'
import './Estilos/html.css'
 

function App() {
  return (
    <Provider store={store}>
      <ToastContainer position="top-right" autoClose={3000} />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/registro" element={<Registro />} />
          <Route element={<RutasProtegidas />}>
            <Route element={<RutasClientes/>}>
              <Route path="/" element={<Navbar/>}>

                <Route path="/listas" element={<ListasCompras/>}/>
                <Route path="/listas/Editar" element={<EditarListaPrincipal/>}/>
                <Route path="/listas/Agregar" element={<AgregarListaPrincipal/>}/>
              
                <Route path="/ItemsLista/:id" element={<ItemsListaPrincipal/>}/>
                <Route path="/ItemsLista/:id/agregar" element={<CardAgregarItemPrincipal/>}/>
                <Route path="/ItemsLista/:id/editar/:itemId" element={<CardAgregarItemPrincipal/>}/>

                <Route path="/recetas/:id" element={<ListaRecetasPrincipal/>}/>
                <Route path="/receta/:id" element={<IngredientesRecetasPrincipal/>}/>
          
                <Route path="/nutricion/:id" element={<CardNutricionPrincipal/>}/>

                <Route path="/Estadisticas" element={<Estadisticas/>}/>

                <Route path='*' element={<NotFound/>}/>
              
              </Route>
            </Route>
            <Route element={<RutasAdmin/>}>
              <Route path="/" element={<Sidebar/>}>

                <Route path="/Usuarios" element={<UsuariosPrincipal/>}/>
                <Route path="/Usuarios/Editar" element={<EditarUsuario/>}/>

                <Route path="/Productos" element={<ProductosPrincipal/>}/>
                <Route path="/Productos/Nuevo" element={<AgregarProductoPrincipal/>}/>
                <Route path="/Productos/Editar" element={<EditarProductoPrincipal/>}/>

                <Route path="/Categorias" element={<CategoriasPrincipal/>}/>
                <Route path="/Categorias/Nueva" element={<AgregarCategoriaPrincipal/>}/>
                <Route path="/Categorias/Editar" element={<EditarCategoria/>}/>

                <Route path="/EstadisticasAdmin" element={<EstadisticasAdmin/>}/>

              </Route>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App


/*



*/ 