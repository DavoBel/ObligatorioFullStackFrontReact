import TableBody from "./TableBody"

const Table = () => {
  return (
    <table className="table table-hover mb-0 align-middle">
        <thead>
            <tr>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <TableBody/>
    </table>
  )
}

export default Table