const { Router } = require('express');
const router =Router();
const mysql_conection=require('../database')
router.get('/',(req,res)=>{
    mysql_conection.query('SELECT * FROM EMPLEADOS',(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    });
});

router.get("/:id",(req, res)=>{
    const { id }= req.params;
    mysql_conection.query(`SELECT * FROM EMPLEADOS WHERE ID = ${id}`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});

router.get("/salary/:salary",(req, res)=>{
    const { salary }= req.params;
    mysql_conection.query(`SELECT * FROM EMPLEADOS WHERE SALARY = ${salary}`,(err,rows,fields)=>{
        if(!err){
            res.json(rows);
        }else{
            console.log(err);
        }
    })
});


module.exports = router;