import bookSchema from "./bookSchema.js";

export const insertBook=(obj)=>{
  return  bookSchema(obj).save()
}

export const getAllBook=()=>{
    return bookSchema.find()
}

export const getBookById=(_id)=>{
    return bookSchema.findById(_id)
}

export const updateBook=(_id,obj)=>{
    return bookSchema.findByIdAndUpdate(_id,obj,{new:true})
}

export const deleteBook=(_id)=>{
    return bookSchema.findByIdAndDelete(_id)
}