import express from "express";
import path from "node:path";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import cors from "cors";
import { ROUTES_INDEX } from "./routerRoute";
import postRouter from "./api/post/router/post.router";
import commentRouter from "./api/comment/router/comment.router";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const corsOptions = {
  origin: ["http://localhost:3000", "http://localhost:3001", "http://localhost:4000", "http://localhost:5173"],
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(express.static(path.join(__dirname, "public")));
app.use(morgan("dev"));

app.use(ROUTES_INDEX.POST_API, postRouter);
app.use(ROUTES_INDEX.COMMENT_API, commentRouter);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT} ^-^`);
});
