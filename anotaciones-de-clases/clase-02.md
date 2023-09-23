# Primer servidor con express


```javascript
// 1. Importar express
const express = require('express');

// 2. Crear una instancia de express
const app = express(); // en app se guardan todas las funcionalidades de express

// 3. Crear una ruta
app.get('/', (req,res)=>{
    res.send('<h1>Hola mundo!</h1>');
})    // http://localhost:8080/

// 3.1 Crear otra ruta que responda a /date y devuelva la fecha actual
app.get('/date', (req, res)=>{  
    // calculamos la fecha de hoy
    const today = new Date();
    // responser con la fecha de hoy
    res.send(today.toString());
    
}); // http:localhost:8080/date

// 4. Levantar el servidor
app.listen(8080, ()=>{
    console.log('Servidor escuchando en el puerto 8080');
});
```
