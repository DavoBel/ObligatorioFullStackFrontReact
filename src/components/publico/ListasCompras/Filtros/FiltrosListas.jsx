const FiltrosListas = ({ XEs, XNo, QuitarFiltros }) => {
  return (
    <div className="filtros-listas d-flex gap-3 align-items-center">
        <div className="d-flex align-items-center gap-1">
            <span className="filtro-label">Por estado</span>
            <div className="btn-group">
                <button className="btn btn-filtro btn-sm" onClick={XEs}><i className="bi bi-flag"></i></button>
            </div>
        </div>
        <div className="d-flex align-items-center gap-1">
            <span className="filtro-label">Por nombre</span>
            <div className="btn-group">
                <button className="btn btn-filtro btn-sm" onClick={XNo}><i className="bi bi-justify-left"></i></button>
            </div>
        </div>
        <div className="d-flex align-items-center gap-1">
            <span className="filtro-label">Quitar filtros</span>
            <div className="btn-group">
                <button className="btn btn-filtro btn-sm" onClick={QuitarFiltros}><i className="bi-x-circle"></i></button>
            </div>
        </div>
    </div>
  )
}

export default FiltrosListas