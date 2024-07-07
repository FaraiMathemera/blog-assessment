import { Router } from "express";
import {
  createBlog,
  updateBlog,
  deleteBlog,
  getAllBlogs,
  getMyBlogs,
  getBlog,
} from "../controllers/blog.controller";

const router = Router();
/**
 * @swagger
 * /api/blogs/:
 *   post:
 *     summary: Create blog
 *     tags: [Blog]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *             properties:
 *               title:
 *                  type: string
 *                  description: Title of blog
 *               body:
 *                  type: string
 *                  description: Body of blog
 *               userId:
 *                  type: number
 *                  description: User id
 *     responses:
 *       200:
 *         description: Blog created successfully.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       400:
 *         description: Errors occurred during creation
 */

router.post("/", createBlog);
/**
 * @swagger
 * /api/blogs/:
 *   put:
 *     summary: Create blog
 *     tags: [Blog]
 *     requestBody:
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - title
 *               - body
 *             properties:
 *               title:
 *                  type: string
 *                  description: Title of blog
 *               body:
 *                  type: string
 *                  description: Body of blog
 *               userId:
 *                  type: number
 *                  description: User id
 *     responses:
 *       200:
 *         description: Blog updated successfully.
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       400:
 *         description: Errors occurred during creation
 */
router.put("/:id", updateBlog);
/**
 * @swagger
 * /api/blogs/{id}:
 *   delete:
 *     summary: Delete blog by id
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The blog id
 *     responses:
 *       200:
 *         description: Blog was successfully deleted
 *       400:
 *         description: Blog was not deleted
 */
router.delete("/:id", deleteBlog);
/**
 * @swagger
 * /api/blogs/:
 *   get:
 *     summary: Get all blogs
 *     tags: [Blog]
 *
 *     responses:
 *       200:
 *         description: Blogs
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 */
router.get("/", getAllBlogs);

/**
 * @swagger
 * /api/blogs/all/{id}:
 *   get:
 *     summary: Get blog by id
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The blog id
 *
 *     responses:
 *       200:
 *         description: Blog id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       400:
 *         description: Blog does not exist
 */
router.get("/all/:id", getMyBlogs);

/**
 * @swagger
 * /api/blogs/{id}:
 *   get:
 *     summary: Get blog by id
 *     tags: [Blog]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: number
 *         required: true
 *         description: The blog id
 *
 *     responses:
 *       200:
 *         description: Blog id
 *         contents:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       400:
 *         description: Blog does not exist
 */
router.get("/:id", getBlog);

export default router;
