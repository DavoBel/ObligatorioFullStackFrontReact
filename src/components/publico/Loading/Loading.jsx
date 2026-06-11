const Loading = () => {
  return (
    <div className="card-body d-flex justify-content-center align-items-center py-5">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Cargando...</span>
      </div>
    </div>
  )
}

export default Loading