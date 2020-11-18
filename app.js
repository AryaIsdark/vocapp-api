import faunadb from "faunadb";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import dotenv from "dotenv";
dotenv.config();

import { emailScheduleJob } from "./emailScheduleJob";

const app = express();

export const dbClient = new faunadb.Client({
  secret: "fnADk0S7OFACAjgWPPtelvFmqRL23o0tOFJR-eUa",
});

export const q = faunadb.query;

if (process.env.SEND_NOTIFICATION) {
  emailScheduleJob.invoke();
}

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8001;
}
app.listen(port);
