const router = require("express").Router();

const Classes = require("./class-model");
const restricted = require("../authenticator");

router.get("/", (req, res) => {
  Classes.getAll()
    .then(classes => {
      res.status(200).json(classes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving classes." });
    });
});

// GET exercises by ID
router.get("/:id", restricted, (req, res) => {
  const id = req.params.id;
  Classes.getById(id)
    .then(classes => {
      res.status(200).json(classes);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ message: "Error retrieving class." });
    });
});

// UPDATE exercises by ID
router.put("/:id", restricted, (req, res) => {
  const { id } = req.params;
  const changes = req.body;
  Classes.findById(id)
    .then(classes => {
      if (classes) {
        Classes.update(changes, id).then(newClasses => {
          res.json(newClasses);
        });
      } else {
        res
          .status(404)
          .json({ message: "Could not find a class with  the given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to update the class" });
    });
});

// DELETE exercises by ID
router.delete("/:id", restricted, (req, res) => {
  const { id } = req.params;

  Classes.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res
          .status(404)
          .json({ message: "Could not find a class with the given id" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to delete the class", err });
    });
});

module.exports = router; 