import { Router } from "express";
import { db } from "../app";
import { ObjectId } from "mongodb";

const router = Router();

//GET:api/v1/vocabularies/
router.get("/", async (req, res) => {
  var query = { groupId: "5fb0380d5a979b36aaadf915" };

  db.collection("vocabularies")
    .find(query)
    .toArray(function (err, response) {
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
  const newVocav = {
    wordId: body.wordId,
    definition: body.definition,
    createdAt: Date.now(),
    groupId: "5fb0380d5a979b36aaadf915",
  };
  db.collection("vocabularies").insertOne(newVocav, function (err, response) {
    if (err) {
      return res.status(400).send({
        success: "false",
        message: "",
        data: err,
      });
    }
    return res.status(200).send({
      success: "true",
      message: "vocabulary was created",
      data: response.insertedId,
    });
  });
});

//GET:api/v1/vocabularies/:id
router.get("/:id", async (req, res) => {
  var query = { _id: ObjectId(req.params.id) };
  db.collection("vocabularies")
    .findOne(query)
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
