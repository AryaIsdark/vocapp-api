import { db } from "../../app";

export const getVocabuliaries = () => {
  var query = { groupId: "5fb0380d5a979b36aaadf915" };

  db.collection("vocabularies")
    .find(query)
    .toArray(function (err, response) {
      if (err) {
        return "";
      }
      return response;
    });
};
