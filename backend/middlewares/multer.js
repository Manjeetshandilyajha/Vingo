import multer from "multer"
const storage = multer.diskStorage({
  destination : (rec,file,cb) => {
    cb(null, "./public")
  },
  filename : (rec,file,cb) => {
    cb(null, file.originalname)
  }
})

export const upload = multer({storage})