const Router = require('express');
const router = Router();

//import routes

//status api endpoint 
router.get('/api-status', (req, res)=>{
    res.send({'status':'on'});
});

//use routes

mosule.exports = router;