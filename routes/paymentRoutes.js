import { Router } from "express";
import * as actions from "../db/payment/actions";

const router = Router();

//GET:api/v1/payments/
router.get("/", async (req, res) => {
  try {
    const response = await actions.getAllData();

    return res.status(200).send({
      success: "true",
      message: "partner retrieved successfully",
      data: response.data.map((element) => element.data),
    });
  } catch (error) {}
});

//GET:api/v1/payments/:id
router.get("/:id", async (req, res) => {
  try {
    const response = await actions.getData(req.params.id);
    return res.status(200).send({
      success: "true",
      message: "payment retrieved successfully",
      data: response.data,
    });
  } catch (error) {}
});

//GET:api/v1/payments
router.post("/", async (req, res) => {
  try {
    const response = await actions.createData(req.body);
    return res.status(200).send({
      success: "true",
      message: "payment created successfully",
      data: response.data,
    });
  } catch (error) {}
});

//GET:api/v1/payments
router.put("/", async (req, res) => {
  try {
    const response = await actions.createData(req.body);
    return res.status(200).send({
      success: "true",
      message: "payment created successfully",
      data: response.data,
    });
  } catch (error) {}
});

export default router;
