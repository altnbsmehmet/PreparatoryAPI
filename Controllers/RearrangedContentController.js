import express from "express";
import rearrangedContentService from "../Services/RearrangedContentService.js";

const router = express.Router();

router.get("/getall/:id", async function GetAllRearrangedContents(req, res) {
    const rearrangedContents = await rearrangedContentService.GetAllAsync(
        req.headers.authorization,
        req.params.id
    );
    res.send(rearrangedContents);
});

router.get("/getbyversion/:id/:version", async function GetRearrangedContentById(req, res) {
    const rearrangedContent = await rearrangedContentService.GetByVersionAsync(
        req.headers.authorization,
        req.params.id,
        req.params.version,
    );
    res.send(rearrangedContent);
});

router.get("/getbyid/:id", async function GetRearrangedContentById(req, res) {
    const rearrangedContent = await rearrangedContentService.GetByVersionAsync(
        req.headers.authorization,
        req.params.id,
    );
    res.send(rearrangedContent);
});

export default router;