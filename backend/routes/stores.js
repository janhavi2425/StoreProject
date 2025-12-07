import express from "express";
import pool from "../db.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.get("/", auth(), async (req,res)=>{
  const stores = await pool.query("SELECT * FROM stores");
  res.json(stores.rows);
});

router.post("/", auth(["admin"]), async (req,res)=>{
  const {name,address,owner_id} = req.body;
  await pool.query("INSERT INTO stores(name,address,owner_id) VALUES($1,$2,$3)",[name,address,owner_id]);
  res.json({message:"Store added"});
});

export default router;
