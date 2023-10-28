const jwt = require('jsonwebtoken'); // Importamos la librería

// Creamos una función para generar el token

const privateKey = process.env.JWT_PRIVATE_KEY;

console.log('privateKey', privateKey);

const options = { expiresIn: '2 days', algorithm: 'HS256' };

const generateJWT = (payload) => {
        const token = jwt.sign(payload, privateKey, options);
        return token;
}


module.exports = {
    generateJWT
}