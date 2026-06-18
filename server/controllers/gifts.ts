import { Request, Response } from "express";
import pool from "../config/database.ts";

const getGifts = async (_req: Request, res: Response) => {
  try {
    const results = await pool.query("SELECT * FROM gifts ORDER BY id ASC");
    res.status(200).json(results.rows);
  } catch (err) {
    res.status(409).json({ error: err instanceof Error ? err.message : err });
  }
};

const getGiftById = async (req: Request, res: Response) => {
  try {
    const giftId = req.params.giftId;
    const result = await pool.query(`
      SELECT name, pricePoint, audience, image, description, submittedBy, submittedOn
      FROM gifts
      WHERE id = $1
      `, [giftId]);
    res.status(200).json(result.rows[0]);
  } catch (error) {
    // res.status(409).json( { error: error.message instanceof Error ? error.message : "Unknown error"} )
  }
}

export default {
  getGifts,
  getGiftById
}