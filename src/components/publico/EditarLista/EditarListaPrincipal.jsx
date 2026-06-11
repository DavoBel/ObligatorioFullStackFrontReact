import CardEditarLista from './Card/CardEditarLista'
import '../../../Estilos/publico/EditarLista/EditarLista.css'

const EditarListaPrincipal = () => {
  return (
    <div id="contenidoPricipal" className="p-4 d-flex justify-content-center align-items-start">
        <CardEditarLista/>
    </div>
  )
}

export default EditarListaPrincipal