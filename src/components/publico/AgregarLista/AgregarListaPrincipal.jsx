import CardAgregarLista from './Card/CardAgregarLista'
import '../../../Estilos/publico/AgregarLista/AgregarLista.css'

const AgregarListaPrincipal = () => {
  return (
    <div id="contenidoPricipal" className="p-4 d-flex justify-content-center align-items-start">
        <CardAgregarLista/>
    </div>
  )
}

export default AgregarListaPrincipal