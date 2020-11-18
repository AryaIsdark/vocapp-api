import { dbClient, q } from "../../app";

const COLLECTION = "vocabularies";

export const getAllData = async (from, to) =>
  dbClient.query(
    q.Range(Collection, q.var("createdAt", from), q.var("createdAt", t))
  );

export const getData = async (id) =>
  dbClient.query(q.Get(q.Ref(q.Collection(COLLECTION), id)));

export const createData = async (data) =>
  dbClient.query(q.Create(q.Collection(COLLECTION), { data: data }));

export const updateData = async (data) =>
  dbClient.query(
    q.Update(q.Ref(q.Collection(COLLECTION), data.id), { data: data })
  );

export const deleteData = async (id) =>
  dbClient.query(q.Delete(q.Ref(q.Collection(COLLECTION), id)));
