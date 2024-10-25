import { Request, Response, NextFunction } from "express";
import { CommentService } from "../service/comment.service.type";

export default class CommentController {
  private readonly _commentService: CommentService;
  constructor(commentService: CommentService) {
    this._commentService = commentService;
    this.getComments = this.getComments.bind(this);
    this.getComment = this.getComment.bind(this);
    this.createComment = this.createComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
  }
  async getComments(req: Request<getCommentsRequest["path"], getCommentsResponse, getCommentsRequest["body"], getCommentsRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { page, limit } = req.query;
      const comments = await this._commentService.getComments(page, limit);
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }
  async getComment(req: Request<getCommentRequest["path"], getCommentResponse, getCommentRequest["body"], getCommentRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { commentId } = req.params;
      const comment = await this._commentService.getComment(commentId);
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }
  async createComment(req: Request<createCommentRequest["path"], createCommentResponse, createCommentRequest["body"], createCommentRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { postId, content, ip } = req.body;
      const createdComment = await this._commentService.createComment(
        {
          content,
          ip,
        },
        postId
      );
      res.send(createdComment);
    } catch (error) {
      next(error);
    }
  }
  async updateComment(req: Request<updateCommentRequest["path"], updateCommentResponse, updateCommentRequest["body"], updateCommentRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const commentId = req.params.commentId;
      const { content } = req.body;
      await this._commentService.updateComment(commentId, { content });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
  async deleteComment(req: Request<deleteCommentRequest["path"], deleteCommentResponse, deleteCommentRequest["body"], deleteCommentRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { commentId } = req.params;
      await this._commentService.deleteComment(commentId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
