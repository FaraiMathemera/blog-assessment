import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Blog extends Model {
  public id!: number;
  public title!: string;
  public body!: string;
  public like!: boolean;
  public userId!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Blog.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    body: {
      type: new DataTypes.STRING(5000),
      allowNull: false,
    },
    like: { type: new DataTypes.BOOLEAN(), allowNull: false },
    userId: { type: new DataTypes.INTEGER(), allowNull: false },
  },
  {
    tableName: "Blogs",
    sequelize,
  }
);

export default Blog;

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - title
 *         - body
 *       properties:
 *         id:
 *           type: number
 *           description: Id of blog auto increment
 *         title:
 *           type: string
 *           description: Title of blog
 *         body:
 *           type: string
 *           description: Body of blog
 *         like:
 *           type: boolean
 *           description: Whether some liked the blog
 *       example:
 *         id: 1
 *         title: Sample Title
 *         body: Sample Body
 *         like: false
 */
