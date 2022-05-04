const router = require("express").Router();
const { Traveller, Location, Trips } = require("../../models");

router.get("/", (req, res) => {
    try {
        const travellerData = await Traveller.findAll({
        });
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/", (req, res) => {
    try {
        const travellerData = await Traveller.create({
            traveller_id: req.body.traveller_id,
        });
        res.status(200).json(travellerData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get("/:id", (req, res) => {
    try {
        const TravellerData = await Traveller.findByPk(req.params.id, {
            include: [{ model: Location }, { model: Trips }],
        });

        if (!TravellerData) {
            res.status(404).json({ message: 'No travellers found with that id!' });
            return;
        }

        res.status(200).json(TravellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete("/:id", (req, res) => {
    try {
        const TravellerData = await Traveller.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!TravellerData) {
            res.status(404).json({ message: 'No travellers found with that id!' });
            return;
        }

        res.status(200).json(TravellerData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;