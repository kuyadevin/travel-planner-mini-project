const router = require("express").Router();
const { Location } = require("../../models");

router.get("/", (req, res) => {
    try{
        const locationData = Location.findAll({
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
    });

router.get("/:id", (req, res) => {
    try{
        const locationData = Location.findByPk(req.params.id, {
        });
        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
})
router.post("/", (req, res) => {
    try{
        const newLocation = Location.create({
            location_id: req.body.location_id,
        });
        res.status(200).json(newLocation);
    } catch (err) {
        res.status(400).json(err);
    }
});
router.delete("/:id", (req, res) => {
    try {
        const locationData= Location.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!locationData) {
            res.status(404).json({ message: 'No location found with that ID!'});
            return
        }
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;