import Joi from "joi";

export const itemListaValidator = Joi.object({
    producto: Joi.string().required().messages({
        "string.base": "El ID del producto debe ser un texto",
        "string.empty": "Seleccione un producto",
        "any.required": "El producto es obligatorio"
    }),
    cantidad: Joi.number().integer().positive().required().messages({
        "number.base": "La cantidad debe ser un número",
        "number.integer": "La cantidad debe ser un número entero",
        "number.positive": "La cantidad debe ser mayor a 0",
        "any.required": "La cantidad es obligatoria"
    }),
    comprado: Joi.boolean().default(false).messages({
        "boolean.base": "El estado comprado debe ser un valor booleano (true/false)"
    }),
    descripcion: Joi.string().max(255).allow('', null).messages({
        "string.base": "La descripción debe ser un texto",
        "string.max": "La descripción no puede tener más de {#limit} caracteres"
    }),
}).unknown(true);