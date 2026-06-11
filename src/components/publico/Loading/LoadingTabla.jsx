import React from 'react'

const LoadingTabla = () => {
  return (
    <tbody>
        <tr>
            <td colSpan="100%" className="text-center py-5">
                <div className="spinner-border text-danger" role="status">
                    <span className="visually-hidden">Cargando...</span>
                </div>
            </td>
        </tr>
    </tbody>
  )
}

export default LoadingTabla