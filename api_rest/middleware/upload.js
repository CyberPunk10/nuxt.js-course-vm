import path from 'path'
import multer from 'multer'
import moment from 'moment'


const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, path.resolve(__dirname, '../../static'))
  },
  filename(req, file, cb) {
    cb(null, `${moment().format('DDMMYYYY-HHmmss_SSS')}-${file.originalname}`)
  }
})

const fileFilter = (req, file, cb) => {
  if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') { // 'image/' должно совпадать с store/post > formData
    cb(null, true)
  } else {
    cb(null, false)
  }
}

module.exports = multer({
  storage, fileFilter, limits: { fileSize: 1024 * 1024 * 5 } // на фронте тоже есть ограничение размера файла
})
