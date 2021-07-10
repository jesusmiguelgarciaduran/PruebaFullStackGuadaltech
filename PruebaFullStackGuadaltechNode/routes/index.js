const { Router } = require('express');
const router =Router();

router.get('/',(req,res)=>{
    const datos={
        "Nombre":"Jesús Miguel",
        "Fecha naciemiento": "01/08/1999"
    }
    res.json(data);
});

module.exports = router;