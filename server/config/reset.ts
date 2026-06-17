import pool from "./database.ts";
import giftData from "../data/gifts.ts";

const createGiftsTable = async (): Promise<void> => {
  const createTableQuery = `
        DROP TABLE IF EXISTS gifts;

        CREATE TABLE IF NOT EXISTS gifts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            pricePoint VARCHAR(10) NOT NULL,
            audience VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            submittedBy VARCHAR(255) NOT NULL,
            submittedOn TIMESTAMP NOT NULL
        )
    `;

  try {
    await pool.query(createTableQuery);
    console.log("🎉 gifts table created successfully");
  } catch (err) {
    console.error("⚠️ error creating gifts table", { cause: err });
  }
};

const seedGiftsTable = async (): Promise<void> => {
  await createGiftsTable();

  for (const gift of giftData) {
    const insertQuery = `INSERT INTO gifts (name, pricePoint, audience, image, description, submittedBy, submittedOn)
                         VALUES ($1, $2, $3, $4, $5, $6, $7)`;

    const values = [
      gift.name,
      gift.pricePoint,
      gift.audience,
      gift.image,
      gift.description,
      gift.submittedBy,
      gift.submittedOn,
    ];

    try {
      await pool.query(insertQuery, values);
      console.log(`✅ ${gift.name} added successfully`);
    } catch (err) {
      console.error("⚠️ error inserting gift", { cause: err });
    }
  }
};

try {
  await seedGiftsTable();
} catch (err) {
  console.error("Database reset failed:", err)
  process.exit(1)
} finally {
  await pool.end();
}