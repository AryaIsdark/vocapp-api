import { Router } from "express";
import * as actions from "../db/customer/actions";

const router = Router();

//GET:api/v1/customers/:id
router.get("/:id", async (req, res) => {
  try {
    const response = await actions.getData(req.params.id);
    return res.status(200).send({
      success: "true",
      message: "customer retrieved successfully",
      data: response.data,
    });
  } catch (error) {}
});

//GET:api/v1/customers
router.post("/", async (req, res) => {
  try {
    const response = await actions.createData(req.body);
    return res.status(200).send({
      success: "true",
      message: "customer created successfully",
      data: response.data,
    });
  } catch (error) {}
});

//GET:api/v1/customers
router.put("/", async (req, res) => {
  try {
    const response = await actions.createData(req.body);
    return res.status(200).send({
      success: "true",
      message: "customer created successfully",
      data: response.data,
    });
  } catch (error) {}
});

export default router;
