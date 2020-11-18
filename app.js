import faunadb from "faunadb";
import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
import mongodb from "mongodb";
import dotenv from "dotenv";
dotenv.config();

import { emailScheduleJob } from "./emailScheduleJob";

const connnectionString = process.env.DB_CONNECTION_STRING;

export let db;

mongodb.connect(
  connnectionString,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err, client) {
    if (client) {
      db = client.db();
    }
  }
);

const app = express();

export const dbClient = new faunadb.Client({
  secret: "fnADk0S7OFACAjgWPPtelvFmqRL23o0tOFJR-eUa",
});

export const q = faunadb.query;

emailScheduleJob.invoke();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", routes);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 8001;
}
app.listen(port);
