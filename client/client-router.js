const router = require("express").Router();

const Clients = require("../client/client-authModel");

router.get("/", (req, res) => {
    console.log('token', req.decodedToken);
<<<<<<< HEAD

=======
    
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
    Clients.find()
    .then(clients => {
        res.json(clients);
    })
    .catch(err => res.send(err))
});

module.exports = router; 