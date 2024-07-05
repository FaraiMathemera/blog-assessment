import express from "express";
import bodyParser from "body-parser";
import userRoutes from "./routes/user.routes";
import blogRoutes from "./routes/blog.routes";
import sequelize from "./config/database";
import cors from "cors";

const app = express();
const port = 3000;
app.use(express.json({ limit: "50mb" }));
app.use(cors());
app.use(bodyParser.json());

app.use("/api/auth", userRoutes);
app.use("/api/blogs", blogRoutes);
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
sequelize
  .sync()
  .then(() => {})
  .catch((error) => {
    console.log("Error connecting to the database:", error);
  });
