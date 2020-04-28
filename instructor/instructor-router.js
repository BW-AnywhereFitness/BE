const router = require("express").Router();

const Instructors = require("./instructor-authModel");

router.get("/", (req, res) => {
    console.log('token', req.decodedToken);
    
    Instructors.find()
    .then(instructors => {
        res.json(instructors);
    })
    .catch(err => res.send(err))
});

module.exports = router; 