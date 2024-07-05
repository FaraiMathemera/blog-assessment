import { Router } from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
} from "../controllers/blog.controller";

const router = Router();

router.post("/", createBlog);
router.put("/:id", updateBlog);
router.delete("/:id", deleteBlog);
router.get("/", getAllBlogs);
router.get("/:id", getMyBlogs);

export default router;
