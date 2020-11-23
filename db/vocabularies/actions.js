import mongodb, { ObjectId } from "mongodb";
import dotenv from "dotenv";
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

export const getVocabuliaries = (query) => {
  return db.collection("vocabularies").find(query);
};

export const getVocabulary = (id) => {
  var query = { _id: ObjectId(id) };
  return db.collection("vocabularies").findOne(query);
};

export const createVocabulary = (wordId, definition, groupId) => {
  const newItem = {
    wordId: wordId,
    definition: definition,
    createdAt: Date.now(),
    groupId: groupId,
  };
  try {
    return db.collection("vocabularies").insertOne(newItem);
  } catch (err) {
    console.error(err);
  }
};
