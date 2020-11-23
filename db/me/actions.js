import * as vocabularyGroupActions from "../vocabularyGroup/actions";
import * as userActions from "../user/actions";
import { ObjectId } from "mongodb";

export const getMe = async (userId) => {
  const vocabularyGroups = await vocabularyGroupActions.getVocabularyGroups({
    userId: ObjectId(userId),
  });
  const me = await userActions.getUser(userId);

  return {
    me,
    vocabularyGroups,
  };
};
