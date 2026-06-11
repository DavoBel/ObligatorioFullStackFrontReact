import CardHeaderItem from './CardHeaderItem'
import CardBodyItem from './CardBodyItem'
import CardFooterItem from './CardFooterItem'
import productoImg from '../Screenshot 2026-05-17 151010.png'
const Card = ( { item } ) => {
  return (
    <div className="card">
        <img src={item.producto.imagen} className="card-img-top" alt="producto"/>
        <CardHeaderItem itemId = {item._id}/>
        <CardBodyItem item={item}/>
        <CardFooterItem item={item}/>
    </div>
  )
}

export default Card