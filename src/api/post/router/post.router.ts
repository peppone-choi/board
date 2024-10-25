import { ROUTES_INDEX } from "@/routerRoute";
import { extractPath } from "@/util/path.util";
import express from "express";
import PostController from "../controller/post.controller";
import PostServiceImpl from "../service/post.service";
import { MemoryPostRepository } from "../repository/memoryPost.repository";
import { MongoosePostRepository } from "../repository/mongoosePost.repository";

const postRouter = express.Router();

const POST_ROUTES = {
  GET_POSTS: "/api/post",
  GET_POST_COMMENTS: "/api/post/:postId/comments",
  GET_POST: "/api/post/:postId",
  CREATE_POST: "/api/post",
  UPDATE_POST: "/api/post/:postId",
  DELETE_POST: "/api/post/:postId",
} as const;

const postController = new PostController(new PostServiceImpl(new MongoosePostRepository()));

postRouter.get(extractPath(POST_ROUTES.GET_POSTS, ROUTES_INDEX.POST_API), postController.getPosts);

postRouter.get(extractPath(POST_ROUTES.GET_POST_COMMENTS, ROUTES_INDEX.POST_API), postController.getCommentsByPostId);

postRouter.get(extractPath(POST_ROUTES.GET_POST, ROUTES_INDEX.POST_API), postController.getPost);

postRouter.post(extractPath(POST_ROUTES.CREATE_POST, ROUTES_INDEX.POST_API), postController.createPost);

postRouter.put(extractPath(POST_ROUTES.UPDATE_POST, ROUTES_INDEX.POST_API), postController.updatePost);

postRouter.delete(extractPath(POST_ROUTES.DELETE_POST, ROUTES_INDEX.POST_API), postController.deletePost);

export default postRouter;
