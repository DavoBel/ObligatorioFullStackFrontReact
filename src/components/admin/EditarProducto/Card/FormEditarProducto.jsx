import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form'; 
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import api from '../../../../api/api';
import { setProductoAModificar, actualizarProducto } from "../../../../features/ProductosSlice"
import { joiResolver } from '@hookform/resolvers/joi';
import { actualizarProductoValidator } from '../../../../validators/productos.validators';
import Loading from '../../../publico/Loading/Loading';

const FormEditarProducto = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        resolver: joiResolver(actualizarProductoValidator)
    });
    const productoAModificar = useSelector((state) => state.ProductosSlice.productoAModificar)
    const [categorias, setCategorias] = useState([]);
    const [vistaPrevia, setVistaPrevia] = useState(productoAModificar?.imagen ?? null);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [loading, setLoading] = useState(true);

    const onSubmit = data =>{
        setLoading(true);
        const formData = new FormData();
        formData.append("nombre", data.nombre);
        formData.append("nombreIngles", data.nombreIngles);
        formData.append("precio", data.precio);
        formData.append("categoria", data.categoria);
        formData.append("unidad", data.unidad);
        if (data.imagen?.[0]) formData.append("imagen", data.imagen[0]);
        api.put(`/productos/${productoAModificar._id}`, formData).then(r=>{
            dispatch(actualizarProducto({...productoAModificar, ...formData.entries()}));
            dispatch(setProductoAModificar(null));
            navigate(`/Productos`)
        }).catch(e=>console.log(e))
        .finally(() => setLoading(false));
    };

    useEffect(()=>{
        api.get("/categorias?page=1&limit=0")
        .then(r=>{
            setCategorias(r.data);
        }).catch(e=>console.log(e))
        .finally(() => setLoading(false));
    },[])
    
    useEffect(()=>{
        if(!productoAModificar)return;
        reset({
            nombre: productoAModificar.nombre,
            nombreIngles: productoAModificar.nombreIngles,
            precio: productoAModificar.precio,
            unidad: productoAModificar.unidad,
            categoria: productoAModificar.categoria._id,
        })
    },[])
    
    const cargarImagenPrevia = (e) => {
        const file = e.target.files[0];
        setVistaPrevia(file ? URL.createObjectURL(file) : productoAModificar?.imagen);
    }    

    if (loading) return<><Loading/></>

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row g-3">
                <div className="col-12 col-md-6">
                    <label htmlFor="nombre" className="form-label fw-semibold">Nombre</label>
                    <input type="text" id="nombre" placeholder="Nombre" {...register("nombre")} />
                    {errors.nombre && <span className="error-message">{errors.nombre.message}</span>}
                </div>

                <div className="col-12 col-md-6">
                    <label htmlFor="nombreEn" className="form-label fw-semibold">Nombre en inglés</label>
                    <input type="text" id="nombreEn" placeholder="Nombre en ingles" {...register("nombreIngles")} />
                    {errors.nombreIngles && <span className="error-message">{errors.nombreIngles.message}</span>}
                </div>

                <div className="col-12 col-md-6">
                    <label htmlFor="precio" className="form-label fw-semibold">Precio</label>
                    <div className="input-group">
                        <span className="input-group-text">$</span>
                        <input type="number" id="precio" placeholder="Precio" className="form-control" {...register("precio")} />
                    </div>
                    {errors.precio && <span className="error-message">{errors.precio.message}</span>}
                </div>

                <div className="col-12 col-md-6">
                    <label htmlFor="unidad" className="form-label fw-semibold">Unidad</label>
                    <select id="unidad" className="form-select" {...register("unidad")}>
                    <option value="kg">Kg</option>
                    <option value="l">L</option>
                    <option value="unidad">Unidad</option>
                    </select>
                    {errors.unidad && <span className="error-message">{errors.unidad.message}</span>}
                </div>

                <div className="col-12">
                    <label htmlFor="categoria" className="form-label fw-semibold">Categoria</label>
                    <select id="categoria" className="form-select" {...register("categoria")}>
                        {categorias.map(c => (
                            <option key={c._id} value={c._id}>{c.nombre}</option>
                        ))}
                    </select>
                    {errors.categoria && <span className="error-message">{errors.categoria.message}</span>}
                </div>

                <div className="col-12">
                    <label htmlFor="imagen" className="form-label fw-semibold">Imagen</label>
                    <input type="file" id="imagen" className="form-control" accept="image/*" {...register("imagen", { onChange: cargarImagenPrevia })} />
                    <div className="mt-2 img-preview">
                    {vistaPrevia? <img src={vistaPrevia} alt="Vista previa" />: <span><i className="bi bi-image me-1"></i> Vista previa</span>}
                    </div>
                    {errors.imagen && <span className="error-message">{errors.imagen.message}</span>}
                </div>
            </div>
            <div className="d-flex gap-2 mt-4">
                    <button type="submit" className="btn btn-success w-100">
                        <i className="bi bi-check-lg me-1"></i> Guardar
                    </button>
            </div>
        </form>
    );
}

export default FormEditarProducto


