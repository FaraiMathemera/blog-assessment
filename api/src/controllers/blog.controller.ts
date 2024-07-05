import { Request, Response } from "express";
import Blog from "../models/blog.model";

export const createBlog = async (req: Request, res: Response) => {
  const { title, body } = req.body;
  try {
    const newBlog = await Blog.create({ title, body });
    res
      .status(201)
      .json({ message: "Blog created successfully", blog: newBlog });
  } catch (error) {
    res.status(500).json({ message: "Error creating blog", error });
  }
};

export const updateBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, body } = req.body;
  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      blog.title = title;
      blog.body = body;
      await blog.save();
      res.status(200).json({ message: "Blog updated successfully", blog });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error updating blog", error });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const blog = await Blog.findByPk(id);
    if (blog) {
      await blog.destroy();
      res.status(200).json({ message: "Blog deleted successfully" });
    } else {
      res.status(404).json({ message: "Blog not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error });
  }
};

export const getAllBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.findAll();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};

export const getMyBlogs = async (_req: Request, res: Response) => {
  try {
    const blogs = await Blog.findAll({ where: { userId: +_req.params.id } });
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error });
  }
};
