import mongodb from "mongodb";
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

export const getVocabularyGroups = async (query) => {
  let vocabularyGroups;
  await db
    .collection("vocabularyGroups")
    .find(query)
    .toArray()
    .then((data) => {
      vocabularyGroups = data;
    });
  return vocabularyGroups;
};
