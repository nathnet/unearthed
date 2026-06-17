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

export default {
  getGifts
}