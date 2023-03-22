import colors from 'colors';
import pausa from './helpers/mensajes.js'
import  inquirerMenu  from './helpers/inquirer.js';
console.clear();


const main = async( ) => {

    console.log('hola mundo');
    let opt = '';
    do {
        opt = await inquirerMenu();
        console.log({opt});

        if (opt !== '0') await pausa();
;
    } while (opt !== '0');

    // mostrarMenu();
    // pausa(); 
    
}

main();

// Fran tiene la version de node 14.17.5