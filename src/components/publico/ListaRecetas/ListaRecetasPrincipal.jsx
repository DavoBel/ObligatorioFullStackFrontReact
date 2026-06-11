import ListaRecetas from "./ListaRecetas"
import '../../../Estilos/publico/ListaRecetas/ListaRecetas.css'

const ListaRecetasPrincipal = () => {
  return (
    <div id="contenidoPricipal" className="p-4">
        <h4 className="mb-0">Recetas sugeridas</h4>
        <br />
        <ListaRecetas/>
    </div>
  )
}

export default ListaRecetasPrincipal