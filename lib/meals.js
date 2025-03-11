import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // .run() for inserting data
  // .all for fetching multiple rows
  // .get for a single row
  await new Promise((resolve) => setTimeout(resolve, 2000));

  // throw new Error("Loading meals failed");
  return db.prepare("SELECT * FROM meals").all();
}

export async function getMeal(slug) {}
