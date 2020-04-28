require("dotenv").config(); 
<<<<<<< HEAD
=======

>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
const server = require("./server");


const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
<<<<<<< HEAD
}); 
=======
});
>>>>>>> 25cf192ed51f278aaf1b71fa488febcce5977505
