import { ROUTES_INDEX } from "@/routerRoute";
import { extractPath } from "@/util/path.util";
import express from "express";
import CommentController from "../controller/comment.controller";
import CommentServiceImpl from "../service/comment.service";
import { MemoryCommentRepository } from "../repository/memoryComment.repository";
import { MemoryPostRepository } from "@/api/post/repository/memoryPost.repository";

const commentRouter = express.Router();

const COMMENT_ROUTES = {
  GET_COMMENTS: "/api/comment",
  GET_COMMENT: "/api/comment/:commentId",
  CREATE_COMMENT: "/api/comment",
  UPDATE_COMMENT: "/api/comment/:commentId",
  DELETE_COMMENT: "/api/comment/:commentId",
} as const;

const commentController = new CommentController(new CommentServiceImpl(new MemoryCommentRepository(), new MemoryPostRepository()));

commentRouter.get(extractPath(COMMENT_ROUTES.GET_COMMENTS, ROUTES_INDEX.COMMENT_API), commentController.getComments);

commentRouter.get(extractPath(COMMENT_ROUTES.GET_COMMENT, ROUTES_INDEX.COMMENT_API), commentController.getComment);

commentRouter.post(extractPath(COMMENT_ROUTES.CREATE_COMMENT, ROUTES_INDEX.COMMENT_API), commentController.createComment);

commentRouter.put(extractPath(COMMENT_ROUTES.UPDATE_COMMENT, ROUTES_INDEX.COMMENT_API), commentController.updateComment);

commentRouter.delete(extractPath(COMMENT_ROUTES.DELETE_COMMENT, ROUTES_INDEX.COMMENT_API), commentController.deleteComment);

export default commentRouter;
