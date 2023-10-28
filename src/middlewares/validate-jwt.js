const jwt = require('jsonwebtoken'); // Importamos la librería

// Creamos una función middleware para validar el token

const privateKey = process.env.JWT_PRIVATE_KEY;

const validateJWT = async (req, res, next) => {
    try {
        const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null ; // Obtenemos el token de los headers separando la palabra Bearer del token
        // recordemos que .split() devuelve un array con los elementos separados por el caracter que le pasemos como argumento

        if(!token){
            return res.status(401).json({
                ok: false,
                msg: 'No se ha enviado un token',
                data: null
            });
        }

        console.log('token', token, privateKey)

        const payload = await jwt.verify(token, privateKey, {
            algorithms: ['HS256']
        }); // Verificamos el token

        console.log('payload', payload);

        if(!payload){
            return res.status(401).json({
                ok: false,
                msg: 'Token no válido',
                data: null
            });
        }

        req.body.user = payload; // Guardamos el payload en el request

        next(); // Pasamos al siguiente middleware o controllador
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error al validar el token',
            error
        });
    }
        

}

module.exports = {
    validateJWT
}