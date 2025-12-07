import express from "express";
import pool from "../db.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/", auth(["user"]), async (req,res)=>{
  const {store_id,rating,comment} = req.body;
  await pool.query(
    `INSERT INTO ratings(user_id,store_id,rating,comment)
     VALUES($1,$2,$3,$4)
     ON CONFLICT(user_id,store_id) DO UPDATE SET rating=$3, comment=$4`,
    [req.user.id, store_id, rating, comment]
  );
  res.json({message:"Rating submitted"});
});

router.get("/owner", auth(["owner"]), async (req,res)=>{
  const result = await pool.query(
    `SELECT s.name,r.rating,r.comment 
     FROM ratings r JOIN stores s ON s.id=r.store_id 
     WHERE s.owner_id=$1`, [req.user.id]);
  res.json(result.rows);
});

export default router;
