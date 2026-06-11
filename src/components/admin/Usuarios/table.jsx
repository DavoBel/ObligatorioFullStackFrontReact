import TableBody from "./TableBody"

const Table = ({ page }) => {
  return (
    <table className="table table-hover mb-0 align-middle">
        <thead>
            <tr>
                <th>Email</th>
                <th>Nombre</th>
                <th>Rol</th>
                <th>Plan</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <TableBody/>
    </table>
  )
}

export default Table