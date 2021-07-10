const mysql=require('mysql');

const mysql_conection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'root',
    database:'EMPLEADOS'
});
mysql_conection.conection(function(error){
    if(error){
        console.log(error);
        return;
    }else{
        console.log('Conexión con la base de datos establecida');
    }
});

module.exports= mysql_conection;