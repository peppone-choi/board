import { Request, Response, NextFunction } from "express";
import { CommentService } from "../service/comment.service.type";

export default class CommentController {
  private readonly _commentService: CommentService;
  constructor(commentService: CommentService) {
    this._commentService = commentService;
  }
  async getComments(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await this._commentService.getComments();
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }
  async getComment(req: Request, res: Response, next: NextFunction) {
    try {
      const commentId = req.params.commentId;
      const comment = await this._commentService.getComment(commentId);
      res.send(comment);
    } catch (error) {
      next(error);
    }
  }
  async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = req.body;
      const createdComment = await this._commentService.createComment(comment);
      res.send(createdComment);
    } catch (error) {
      next(error);
    }
  }
  async updateComment(req: Request, res: Response, next: NextFunction) {
    try {
      const commentId = req.params.commentId;
      const comment = req.body;
      await this._commentService.updateComment(commentId, comment);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
  async deleteComment(req: Request, res: Response, next: NextFunction) {
    try {
      const commentId = req.params.commentId;
      await this._commentService.deleteComment(commentId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
