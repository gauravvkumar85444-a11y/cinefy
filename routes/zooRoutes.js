import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("The best zoo in town !");
})

router.get("/animals", (req, res) => {
    const animal = req.query.animalName;
    res.send(`Meet our amazing animals ${animal}s`);
})

router.get("/about", (req, res) => {
    res.send("Caring for animals and Promoting Wildlife Conservation since 1911 !");
})

export default router;