import { Router } from "express";
import * as actions from "../db/vocabularies/actions";

const router = Router();

//GET:api/v1/vocabularies/
router.get("/", async (req, res) => {
  actions.getVocabuliaries().toArray(function (err, response) {
    if (err) {
      return res.status(400).send({
        success: "false",
        message: "",
        data: err,
      });
    }
    return res.status(200).send({
      success: "true",
      message: "",
      data: response,
    });
  });
});

//POST:api/v1/vocabularies/
router.post("/", async (req, res) => {
  const { body } = req;
  actions
    .createVocabulary(body.wordId, body.definition)
    .catch((err) => {
      return res.status(400).send({
        success: "false",
        message: "",
        data: err,
      });
    })
    .then((respone) => {
      return res.status(200).send({
        success: "true",
        message: "vocabulary was created",
        data: response.insertedId,
      });
    });
});

//GET:api/v1/vocabularies/:id
router.get("/:id", async (req, res) => {
  actions
    .getVocabulary(req.params.id)
    .catch((err) => {
      return res.status(400).send({
        success: "false",
        message: "",
        data: err,
      });
    })
    .then((doc) => {
      return res.status(200).send({
        success: "true",
        message: "",
        data: doc,
      });
    });
});

export default router;
