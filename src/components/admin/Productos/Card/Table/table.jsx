import TableBody from "./TableBody"

const Table = () => {
  return (
    <table className="table table-hover mb-0 align-middle">
        <thead>
            <tr>
                <th>Imagen</th>
                <th>Nombre</th>
                <th>Nombre en inglés</th>
                <th>Precio</th>
                <th>Categoría</th>
                <th>Unidad</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <TableBody/>
    </table>
  )
}

export default Table