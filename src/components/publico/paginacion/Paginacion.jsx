const Paginacion = ({ page, anteriror, siguiente }) => {
  return (
    <nav aria-label="Page navigation example">
        <ul className="pagination">
            <li className={`page-item ${page === 1 ? 'disabled' : ''}`}>
                <a className="page-link" onClick={anteriror} href="#" aria-label="Previous"><span aria-hidden="true">«</span></a>
            </li>
            <li className="page-item">
                <span className="page-link">{page}</span>
            </li>
            <li className="page-item">
                <a className="page-link" onClick={siguiente} href="#" aria-label="Next"><span aria-hidden="true">»</span></a>
            </li>
        </ul>
    </nav>
  )
}

export default Paginacion