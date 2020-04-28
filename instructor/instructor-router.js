const router = require("express").Router();

const Instructors = require("./instructor-authModel");

router.get("/", (req, res) => {
    console.log('token', req.decodedToken);
<<<<<<< HEAD

=======
    
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
    Instructors.find()
    .then(instructors => {
        res.json(instructors);
    })
    .catch(err => res.send(err))
});

<<<<<<< HEAD
module.exports = router;  
=======
module.exports = router; 
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
