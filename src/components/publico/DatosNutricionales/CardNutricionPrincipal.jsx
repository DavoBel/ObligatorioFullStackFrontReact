import CardNutricion from './CardNutricion'
import '../../../Estilos/publico/DatosNutricionales/DatosNutricionales.css'

const CardNutricionPrincipal = () => {
  return (
    <div id="contenidoPricipal" className="p-4 d-flex justify-content-center align-items-start">
        <CardNutricion/>
    </div>
  )
}

export default CardNutricionPrincipal