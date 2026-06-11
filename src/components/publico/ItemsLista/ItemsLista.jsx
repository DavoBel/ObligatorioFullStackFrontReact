import Item from './Item'
import { useSelector } from 'react-redux'

const ItemsLista = ({ id }) => {
  const items = useSelector((state) => state.listasSlice.listas.find(lista=>lista._id == id)?.items);
  return (
    <div className="row row-cols-3 g-3 justify-content-center items-grid">
         {items?.map(item => (<Item key={item._id} item={item}/>))}
    </div>
  )
}

export default ItemsLista