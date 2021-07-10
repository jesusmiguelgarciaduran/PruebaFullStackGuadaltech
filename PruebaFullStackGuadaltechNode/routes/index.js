const { Router } = require('express');
const router =Router();

router.get('/',(req,res)=>{
    res.json({"Nombre":"Jesús Miguel"});
});

module.exports = router;