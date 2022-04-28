import express  from "express";
import { issueTicket, uploadFiles} from "../controllers/docController.js";
import multer from 'multer'
// var multer = require('multer')();
//import { createFile } from "../controllers/docfileController.js";
const upload = multer({ dest: 'uploads/' })
const router = express.Router();
//router.post('/registerdoc',registerDoctor);
router.post('/issueticket',issueTicket);
router.post('/file',multer().single('file'),uploadFiles);
// router.post('/signupdoc', signupDoctor);
// router.post('/checkdoc',checkDoctor);
// router.get('/post/:id',getPost);
// //router.post('/createfile',createFile);
// router.get('/docs',getAllDoctors);

export default router;