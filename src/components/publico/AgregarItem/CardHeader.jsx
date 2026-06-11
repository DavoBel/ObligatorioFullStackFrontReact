import { useSelector } from 'react-redux'

const CardHeader = () => {
  const itemAModificar = useSelector(state => state.ItemsSlice.itemAModificar);
  return (
    <div className="card-header bg-success text-white">
        <h5 className="mb-0">{itemAModificar ? 'Editar Item' : 'Agregar Item'}</h5>
    </div>
  )
}

export default CardHeader