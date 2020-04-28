const router = require("express").Router();

const Clients = require("../client/client-authModel");

router.get("/", (req, res) => {
    console.log('token', req.decodedToken);

    Clients.find()
    .then(clients => {
        res.json(clients);
    })
    .catch(err => res.send(err))
});

module.exports = router; 