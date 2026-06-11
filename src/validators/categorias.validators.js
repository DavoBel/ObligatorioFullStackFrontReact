import Joi from "joi";

export const categoriaSchema = Joi.object({
    nombre: Joi.string().lowercase().min(3).max(40).required().messages({
        "string.base": "El nombre de la categoría debe ser un texto",
        "string.empty": "El nombre no puede estar vacio",
        "string.min": "El nombre de la categoría debe tener al menos {#limit} caracteres",
        "string.max": "El nombre de la categoría no puede tener mas de {#limit} caracteres",
        "any.required": "El nombre de la categoría es obligatorio"
    }),
    descripcion: Joi.string().lowercase().max(200).required().messages({
        "string.base": "La descripción de la categoría debe ser un texto",
        "string.empty": "La descripción no puede estar vacia",
        "string.max": "La descripción no puede tener mas de {#limit} caracteres",
        "any.required": "La descripción de la categoría es obligatoria"
    })
});
