import Joi from "joi";

export const validarLista = Joi.object({
    nombre: Joi.string().min(6).max(50).required().messages({
        "string.base": "El Nombre de la lista debe ser un texto",
        "string.empty": "El Nombre de la lista no puede estar vacío",
        "string.min": "El Nombre de la lista debe tener al menos {#limit} caracteres",
        "string.max": "El Nombre de la lista no puede tener más de {#limit} caracteres",
        "any.required": "El Nombre de la lista es obligatorio"
    }),
    presupuesto: Joi.number().positive().optional().messages({
        "number.base": "El Presupuesto debe ser un número",
        "number.positive": "El Presupuesto debe ser un número positivo",
    })
});

export const validarActualizarLista = Joi.object({
    nombre: Joi.string().min(6).max(50).optional().messages({
        "string.base": "El Nombre de la lista debe ser un texto",
        "string.empty": "El Nombre de la lista no puede estar vacío",
        "string.min": "El Nombre de la lista debe tener al menos {#limit} caracteres",
        "string.max": "El Nombre de la lista no puede tener más de {#limit} caracteres",
    }),
    presupuesto: Joi.number().positive().optional().messages({
        "number.base": "El Presupuesto debe ser un número",
        "number.positive": "El Presupuesto debe ser un número positivo",
    }),
    Estado: Joi.boolean().required().messages({
        "boolean.base": "Seleccione un estado",
        "any.required": "El estado es obligatorio"
    })
});


