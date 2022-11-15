import express from "express";
import { getAllBook, getBookById, insertBook } from "../models/bookModel.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const result = await insertBook(req.body);

    result?._id
      ? res.json({
          status: "success",
          message: "Book inserted Successfully",
          result,
        })
      : res.json({
          status: "error",
          message: "Book insertion failed",
        });
  } catch (error) {
    next(error);
  }
});

router.get("/:_id?", async (req, res, next) => {
  try {
    const { _id } = req.params;
    const result = _id ? await getBookById(_id) : await getAllBook();

   res.json({
          status: "success",
          result,
        })
     
  } catch (error) {
    next(error);
  }
});

export default router;
