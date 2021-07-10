const express = require('express');
const app =express();
const morgan=require('morgan');

//Configuraciones
app.set('port',process.env.PORT || 4000);
app.set('json spaces',2)

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas
app.use(require('./routes/index'));

//Inicio del servidor
app.listen(app.get('port'),()=>{
    console.log(`Server iniciado en el puerto ${app.get('port')}`);
});