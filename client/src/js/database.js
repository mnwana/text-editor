import { openDB } from "idb";
import "regenerator-runtime/runtime";

export const initdb = async () =>
  openDB("jate_db", 2, {
    upgrade(db) {
      if (db.objectStoreNames.contains("files")) {
        console.log("jate database already exists");
        return;
      }
      db.createObjectStore("files", { keyPath: "id", autoIncrement: true });
      console.log("jate database created");
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log("PUT to the database");

  const jateDB = await openDB("jate_db", 2);

  const tx = jateDB.transaction("jate_db", "readwrite");

  const store = tx.objectStore("files");

  const request = store.put({ id: id, content: content });
  const result = await request;
  console.log("🚀 - data saved to the database", result);
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log("GET from the database");

  // Create a connection to the database database and version we want to use.
  const jateDB = await openDB("jate_db", 2);

  // Create a new transaction and specify the database and data privileges.
  const tx = jateDB.transaction("jate_db", "readonly");

  // Open up the desired object store.
  const store = tx.objectStore("files");

  // Use the .getAll() method to get all data in the database.
  const request = store.getAll();

  // Get confirmation of the request.
  const result = await request;
  console.log("result.value", result);
  return result;
};
// initdb();
