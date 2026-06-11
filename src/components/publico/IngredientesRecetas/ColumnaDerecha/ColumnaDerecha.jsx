import CardHeaderInstrucciones from "./CardInstrucciones/CardHeaderInstrucciones"
import CardBodyInstrucciones from "./CardInstrucciones/CardBodyInstrucciones"

const ColumnaDerecha = ({yt, intrucciones}) => {

  return (
    <div className="col-12 col-lg-7">
      {yt && (
        <>
          <a href={yt} target="_blank" className="btn btn-danger w-100">
            <i className="bi bi-youtube"></i> Ver video en YouTube
          </a>
          <br/>
          <br/>
        </>
      )}
      <CardHeaderInstrucciones/>
      <CardBodyInstrucciones intrucciones={intrucciones}/>
    </div>
  )
  
}

export default ColumnaDerecha