import { Router } from "express";
const PostRouter = Router();

//
PostRouter.post("/create-post", createPost);
PostRouter.put("/update-post/:id", updatePost);
PostRouter.get("/get-posts", getPosts);

// router = express.Router() đưa ra ngoài
export default PostRouter;
