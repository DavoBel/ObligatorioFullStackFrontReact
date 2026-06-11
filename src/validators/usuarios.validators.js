import Joi from "joi"

export const usuarioSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "El correo electrónico es obligatorio",
        "string.email": "El correo electrónico no es válido"
    }),
    nombre: Joi.string().min(3).max(30).required().messages({
        "string.empty": "El nombre es obligatorio",
        "string.min": "El nombre debe tener al menos 3 caracteres",
        "string.max": "El nombre debe tener al menos 6 caracteres"
    })
}).unknown(true);