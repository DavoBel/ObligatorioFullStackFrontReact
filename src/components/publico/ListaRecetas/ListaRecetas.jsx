import { useEffect, useState } from 'react';
import Recetas from './Recetas'
import api from '../../../api/api'
import { useParams } from 'react-router';
import Loading from '../Loading/Loading'
const ListaRecetas = () => {

  const { id } = useParams()
  const [recetas, setRecetas] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(()=>{
    console.log("id",id);
    api.get(`/recetas?productoId=${id}`)
    .then(r => {
      setRecetas(r.data.meals);
    }).catch(e =>{console.log(e)})
    .finally(() => setLoading(false));;

  }, [])

  if(loading)return<><Loading/></>

  return (
    
    <div className="row row-cols-2 row-cols-md-3 row-cols-xl-4 g-3">
        {recetas?.map(receta => (<Recetas key={receta.idMeal} receta={receta}/>))}
    </div>
  )
}

export default ListaRecetas