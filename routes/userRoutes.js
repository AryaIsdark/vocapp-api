import { response, Router } from "express";
import * as actions from "../db/user/actions";
import * as meActions from "../db/me/actions";

const router = Router();

//POST:api/v1/users/
router.post("/", async (req, res) => {
  const { body } = req;
  try {
    const response = actions.createUser(
      body.name,
      body.lastName,
      body.email,
      body.avatar,
      body.password
    );
    return res.status(200).send({
      success: "true",
      message: "user was created",
      data: response.insertedId,
    });
  } catch (err) {
    return res.status(400).send({
      success: "false",
      message: "",
      data: err,
    });
  }
});

//POST:api/v1/users/authenticate
router.post("/authenticate", async (req, res) => {
  const { body } = req;
  actions
    .login(body.email, body.password)
    .catch((err) => {
      return res.status(400).send({
        success: "false",
        message: "login failed",
        data: err,
      });
    })
    .then((response) => {
      if (response) {
        return res.status(200).send({
          success: "true",
          message: "login success",
          data: response,
        });
      } else
        return res.status(400).send({
          success: "false",
          message: "login faild",
        });
    });
});

//GET:api/v1/users/me/:id
router.get("/me/:id", async (req, res) => {
  const userId = req.params.id;
  const me = await meActions.getMe(userId);
  return res.status(200).send({
    success: "true",
    message: "me",
    data: me,
  });
});

export default router;
