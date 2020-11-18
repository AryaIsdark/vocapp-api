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

export const getVocabuliaries = () => {
  var query = { groupId: "5fb0380d5a979b36aaadf915" };

  return db.collection("vocabularies").find(query);
};
