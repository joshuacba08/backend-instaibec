# Solicitudes de tipo POST

## ¿Qué es una solicitud POST?

Una solicitud POST es una solicitud que se utiliza para enviar datos al servidor. Por ejemplo, si un usuario completa un formulario y hace clic en enviar, los datos del formulario se envían al servidor en una solicitud POST.




## Creación de archivos con FileSystem

```js
const fs = require('fs'); // importamos file system

fs.writeFile('ejemplo.txt', 'Hola mundo', (err) => {
    if (err) throw err;
    console.log('El archivo ha sido creado');
});
```