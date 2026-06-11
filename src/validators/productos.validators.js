import Joi from "joi";

export const productoSchema = Joi.object({
    nombre: Joi.string().lowercase().min(2).max(100).required().messages({
        "string.base": "El nombre del producto debe ser un texto",
        "string.empty": "El nombre no puede estar vacío",
        "string.min": "El nombre del producto debe tener al menos {#limit} caracteres",
        "string.max": "El nombre del producto no puede tener más de {#limit} caracteres",
        "any.required": "El nombre del producto es obligatorio"
    }),
        nombreIngles: Joi.string().lowercase().min(2).max(100).required().messages({
        "string.base": "El nombre del producto en inglés debe ser un texto",
        "string.empty": "El nombre en inglés no puede estar vacío",
        "string.min": "El nombre del producto en inglés debe tener al menos {#limit} caracteres",
        "string.max": "El nombre del producto en inglés no puede tener más de {#limit} caracteres",
        "any.required": "El nombre del producto en inglés es obligatorio"
    }),
    precio: Joi.number().positive().required().messages({
        "number.base": "El precio debe ser un número",
        "number.positive": "El precio debe ser mayor a 0",
        "any.required": "El precio es obligatorio"
    }),
    categoria: Joi.string().trim().required().messages({
        "string.base": "La categoría debe ser un ID válido",
        "string.empty": "La categoría no puede estar vacía",
        "any.required": "La categoría es obligatoria"
    }),
    unidad: Joi.string().lowercase().valid('kg', 'l', 'unidad').required().messages({
        "string.base": "La unidad de medida debe ser un texto",
        "string.empty": "La unidad de medida no puede estar vacía",
        "any.only": "La unidad de medida debe ser una de las siguientes: kg, l, unidad",
        "any.required": "La unidad de medida es obligatoria"
    }),
    imagen: Joi.any().required().custom((value, helpers) => {
        const file = value?.[0];
        if (!file) {
            return helpers.error("any.required");
        }

        if (!file.type?.startsWith("image/")) {
            return helpers.error("any.invalid");
        }
        return value;
    }).messages({
        "any.required": "La imagen es obligatoria",
        "any.invalid": "Debes seleccionar una imagen vÃ¡lida"
    })
}).unknown(true);

export const actualizarProductoValidator = Joi.object({
    nombre: Joi.string().min(2).max(100).optional().messages({
        "string.base": "El nombre del producto debe ser un texto",
        "string.empty": "El nombre no puede estar vacío",
        "string.min": "El nombre del producto debe tener al menos {#limit} caracteres",
        "string.max": "El nombre del producto no puede tener más de {#limit} caracteres"
    }),
    nombreIngles: Joi.string().lowercase().min(2).max(100).optional().messages({
        "string.base": "El nombre del producto en inglés debe ser un texto",
        "string.empty": "El nombre en inglés no puede estar vacío",
        "string.min": "El nombre del producto en inglés debe tener al menos {#limit} caracteres",
        "string.max": "El nombre del producto en inglés no puede tener más de {#limit} caracteres"
    }),
    precio: Joi.number().positive().optional().messages({
        "number.base": "El precio debe ser un número",
        "number.positive": "El precio debe ser mayor a 0"
    }),
    categoria: Joi.string().trim().optional().messages({
        "string.base": "La categoría debe ser un ID válido",
        "string.empty": "La categoría no puede estar vacía"
    }),
    unidad: Joi.string().lowercase().valid('kg', 'l', 'unidad').optional().messages({
        "string.base": "La unidad de medida debe ser un texto",
        "string.empty": "La unidad de medida no puede estar vacía",
        "any.only": "La unidad de medida debe ser una de las siguientes: kg, l, unidad"
    }),
    imagen: Joi.any().optional()
}).unknown(true);