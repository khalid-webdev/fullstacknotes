const {z} =require("zod")
const createNoteSchema = z.object({
  title:z.string().min(3).max(100),
  content:z.string().min(5)
});

module.exports ={
   createNoteSchema
}
