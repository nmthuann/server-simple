import { Router } from "express";
const router = Router();

import { show } from "../app/Controllers/homeController";

// newsController.index
//router.get('/search', siteController.search);
router.get("/", show);

// router = express.Router() đưa ra ngoài
export default router;
