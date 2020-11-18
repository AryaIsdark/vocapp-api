import http from "https";
import { Router } from "express";

const router = Router();

const fields = "definitions";
const strictMatch = "false";

//GET:api/v1/translate/:id
router.get("/:id", async (req, res) => {
  let options = {
    host: "od-api.oxforddictionaries.com",
    path:
      "/api/v2/entries/en-gb/" +
      req.params.id +
      "?fields=" +
      fields +
      "&strictMatch=" +
      strictMatch,
    port: "443",
    method: "GET",
    headers: {
      app_id: "a73d8c41",
      app_key: "077582ff3bf2e5b888b1086bc077d04a",
    },
  };

  http.get(options, (resp) => {
    let body = "";
    resp.on("data", (d) => {
      body += d;
    });
    resp.on("end", () => {
      let parsed = JSON.parse(body);
      return res.status(200).send({
        success: "true",
        message: "partner retrieved successfully",
        data: parsed,
      });
    });
  });
});

export default router;
