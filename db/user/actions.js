import mongodb, { ObjectId } from "mongodb";
import dotenv from "dotenv";
import { response } from "express";
dotenv.config();

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

export const login = (email, password) => {
  var query = { email, password };
  return db.collection("users").findOne(query);
};

export const getUser = async (id) => {
  var query = { _id: ObjectId(id) };
  let user;
  await db
    .collection("users")
    .findOne(query)
    .then((response) => {
      user = response;
    });
  // console.log(("getUser:", user));
  return user;
};

export const createUser = async (
  name,
  lastName,
  email,
  avatar = "",
  password
) => {
  const newItem = {
    name: name,
    lastName: lastName,
    email: email,
    avatar: avatar,
    password: password,
    createdAt: Date.now(),
  };

  db.collection("users")
    .insertOne(newItem)
    .then((response) => {
      db.collection("vocabularyGroups")
        .insertOne({
          userId: response.insertedId,
          name: "general",
        })
        .then((response) => {
          return response;
        });
    })
    .catch((error) => {
      console.log("something went wrong when inserting user");
      return error;
    });
};
