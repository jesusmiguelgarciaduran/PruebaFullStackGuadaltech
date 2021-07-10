const express = require('express');
const app =express();
const morgan=require('morgan');

//Configuraciones
app.set('port',proces.env.PORT || 4000);

//Middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());

//Rutas
app.get('/',(req,res)=>{
    res.send("hola");
});

//Inicio del servidor
app.listen(app.get('port'),()=>{
    console.log(`Server iniciado en el puerto ${app.get('port')}`);
});