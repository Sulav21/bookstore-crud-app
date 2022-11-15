import express from "express";
import { deleteBook, getAllBook, getBookById, insertBook, updateBook } from "../models/bookModel.js";

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
    if (result) {
      res.json({
        status: "success",
        result,
      });
    } else {
      res.json({
        status: "error",
        message: "Book not found",
      });
    }
  } catch (error) {
    next(error);
  }
});

router.patch('/:_id', async(req,res,next)=>{
    try {
        const {_id} = req.params
        const result = await updateBook(_id,req.body)
        if (result) {
            res.json({
              status: "success",
              message:"Updated succesfully",
              result,
            });
          } else {
            res.json({
              status: "error",
              message: "Couldn't update the book details",
            });
          }
    } catch (error) {
        next(error)
    }
})

router.delete('/:_id',async(req,res,next)=>{
    try {
        const {_id} = req.params
        const result = await deleteBook(_id)
        if (result) {
            res.json({
              status: "success",
              message:"Book deleted succesfully"
            });
          } else {
            res.json({
              status: "error",
              message: "Couldn't delete book, try again later",
            });
          }
    } catch (error) {
        next(error)
    }
})


export default router;
