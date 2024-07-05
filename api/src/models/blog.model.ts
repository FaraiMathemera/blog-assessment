import { Model, DataTypes } from "sequelize";
import sequelize from "../config/database";

class Blog extends Model {
  public id!: number;
  public title!: string;
  public body!: string;
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
  },
  {
    tableName: "Blogs",
    sequelize,
  }
);

export default Blog;
