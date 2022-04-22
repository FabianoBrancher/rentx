import { createConnection, getConnectionOptions } from 'typeorm';

interface IOptions {
    host: string;
}

getConnectionOptions().then((options) => {
    const newOptions = options as IOptions;
    newOptions.host = 'database'; //Essa opção deverá ser EXATAMENTO o nome dado ao service do banco de dados
    createConnection({
        ...options
    });
   
}).catch(error => {
    console.log("Erro ao inicializar o database. Erro: ", error);
});