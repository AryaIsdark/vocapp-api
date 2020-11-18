import { Router } from "express";
import { db } from "../app";
import { ObjectId } from "mongodb";
import * as actions from "../db/vocabularies/actions";
import * as EmailService from "../services/EmailService";

const mockData = [
  { wordId: "hello", definition: "gooz" },
  { wordId: "hello", definition: "gooz" },
  { wordId: "hello", definition: "gooz" },
];

const formatEmailHTML = (data) =>
  `<div>${data.map(
    (item) => `<b>${item.wordId}</b>: ${item.definition}<hr/>`
  )}</div>`;

const router = Router();

//GET:api/v1/vocabularies/
router.get("/", async (req, res) => {
  // await actions.getVocabuliaries().toArray(function (err, response) {
  //   if (err) {
  //     return res.status(400).send({
  //       success: "false",
  //       message: "",
  //       data: err,
  //     });
  //   }
  EmailService.sendEmail({
    to: "shahali.arya@gmail.com", // Change to your recipient
    from: "arya.shaw.90@gmail.com", // Change to your verified sender
    subject: "Vocabularies",
    text: "Here's the vocabularies you have saved",
    html: formatEmailHTML(mockData),
  });
  return res.status(200).send({
    html: formatEmailHTML(mockData),
  });
  //   return res.status(200).send({
  //     success: "true",
  //     message: "",
  //     data: response,
  //   });
  // });
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
