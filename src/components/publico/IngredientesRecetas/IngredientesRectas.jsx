import ColumnaDerecha from './ColumnaDerecha/ColumnaDerecha'
import ColumnaIzquierda from './ColumnaIzquierda/ColumnaIzquierda'
import { useParams } from 'react-router'
import { useEffect, useState } from 'react'
import api from '../../../api/api'
import Loading from '../Loading/Loading'


const IngredientesRectas = () => {
  
  const {id} = useParams();
  const [receta, setReceta] = useState(null);
  const [loading, setLoading] = useState(true); 
  
  useEffect(() =>{
    api.get(`/recetas/Ingredientes?recetaId=${id}`)
    .then(r => {
      setReceta(r.data[0]);
    }).catch(e=>(console.log(e)))
    .finally(() => setLoading(false));
  },[])


  if (loading){
    return(
      <>
        <h4 className="mb-0">Receta</h4>
        <Loading/>
      </>
    )
  }
  if (!receta) return null;

  return (
    <>
      <h4 className="mb-0">{receta.Nombre}</h4>
      <br />
      <div className="row g-4">
        <ColumnaIzquierda img={receta.Imagen} ingredientes={receta.ingredientes} />
        <ColumnaDerecha yt={receta.Youtube} intrucciones={receta.Instrucciones} />
      </div>
    </>
    
  )

}

export default IngredientesRectas