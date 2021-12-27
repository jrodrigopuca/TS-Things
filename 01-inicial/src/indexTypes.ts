/**
 * Es un tipo que se se usa para crear propiedades dinámicas
 */

interface CodeErrors {
    [key:number]:string;
}

const httpErrors: CodeErrors = {
    400: 'Bad Request',
    401: 'UnAuthorized',
    404: 'Not Found',
    405: 'Method Not Allowed',
    500: 'Internal Server Error'
}

const validationErrors: CodeErrors = {
    1: 'La contraseña debe tener más de 8 caracteres',
    2: 'La contraseña debe contener al menos una mayúscula',
    3: 'El email debe ser un email válido',
    4: 'El nombre es un campo requerido'
}

const logErrors: CodeErrors = {
    1: 'Products ID 1242: No existe',
    2: 'Products: bad request'
}