import Joi from "joi"

export const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "El correo electrónico es obligatorio",
        "string.email": "El correo electrónico no es válido"
    }),
    password: Joi.string().min(8).required().messages({
        "string.empty": "La contraseña es obligatoria",
        "string.min": "La contraseña debe tener al menos 8 caracteres"
    })
});

export const registroSchema = Joi.object({
    Email: Joi.string().email({ tlds: { allow: false } }).required().messages({
        "string.empty": "El correo electrónico es obligatorio",
        "string.email": "El correo electrónico no es válido"
    }),
    Nombre: Joi.string().min(3).max(30).required().messages({
        "string.empty": "El nombre es obligatorio",
        "string.min": "El nombre debe tener al menos 3 caracteres",
        "string.max": "El nombre debe tener al menos 6 caracteres"
    }),
    Contraseña: Joi.string().min(8).max(30).required().messages({
        "string.empty": "La contraseña es obligatoria",
        "string.min": "La contraseña debe tener al menos 8 caracteres",
        "string.max": "La contraseña debe tener como maximo 30 caracteres"
    }),
    CContraseña: Joi.string().valid(Joi.ref("Contraseña")).required().messages({
        "string.empty": "La confirmación de contraseña es obligatoria",
        "any.only": "Las contraseñas no coinciden"
    })
});
