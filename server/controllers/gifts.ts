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

const createGift = async (req: Request, res: Response) => {
  try {
    const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body;
    const result = await pool.query(`
      INSERT INTO gifts
      (name, pricePoint, audience, image, description, submittedBy, submittedOn)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *
      `, [name, pricepoint, audience, image, description, submittedby, submittedon]);
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(409).json( { error: error instanceof Error ? error.message : "Meh" })
  }
}

const updateGift = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const idStr = req.params.id;
    const id = parseInt(idStr);
    const { name, pricepoint, audience, image, description, submittedby, submittedon } = req.body
    const results = await pool.query(`
      UPDATE gifts SET name = $1, pricePoint = $2, audience = $3, image = $4, description = $5, submittedBy = $6, submittedOn = $7
      WHERE id = $8
      `, [name, pricepoint, audience, image, description, submittedby, submittedon, id]);
    res.status(200).json(results.rows[0]);
  } catch (error) {
    res.status(409).json( { error: error instanceof Error ? error.message : "Meh" })
  }
}

const deleteGift = async (req: Request<{ id: string }>, res: Response) => {
  try {
    const id = parseInt(req.params.id);
    const results = await pool.query('DELETE FROM gifts WHERE id = $1', [id]);
    res.status(200).json(results.rows[0])
  } catch (error) {
    res.status(409).json( { error: error instanceof Error ? error.message : "Meh" })
  }
}

export default {
  getGifts,
  getGiftById,
  createGift,
  updateGift,
  deleteGift
}