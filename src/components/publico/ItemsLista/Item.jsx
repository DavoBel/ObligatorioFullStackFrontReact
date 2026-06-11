import CardItem from './Card/CardItem'
const Item = ( { item } ) => {
  return (
    <div className="col">
        <CardItem item={item}/>
    </div>
  )
}

export default Item