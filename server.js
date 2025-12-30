import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./db.js";
import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server running on ${process.env.PORT}`);
});
