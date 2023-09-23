const fs = require('fs'); // importo el paquete de node para trabajar con FileSystem

// creamos una clase para manejar la inyección de dependencias

class Container {

    constructor() {
    
    }

    // Crear un archivo .json con los datos que le pasemos
    createFile(data){
        fs.writeFile('./src/archives/users.json', JSON.stringify(data), (err) => {
            if (err) throw err; // si hay un error lo lanzo y corto la ejecución
            console.log('El archivo ha sido creado');
        });
    }

    // Leer un archivo .json y devolver los datos que contiene
    async readFile(){
        const data = await fs.promises.readFile('./src/archives/users.json', 'utf-8');
        return JSON.parse(data);
    }

}

module.exports = Container;