import mongoose from "mongoose";
import app from "./app.js";
import { env } from "./config/env.js";

const startServer = async () => {
  try {
    await mongoose.connect(env.mongoUri);
    console.log("MongoDB connected");

    app.listen(env.port || 5000, () => {
      console.log(`Server running on port ${env.port}`);
    });
  } catch (err) {
    console.error("Server startup failed", err);
    process.exit(1);
  }
};
//
startServer();
