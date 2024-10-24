import { Request, Response, NextFunction } from "express";
import { PostService } from "../service/post.service.type";

export default class PostController {
  private readonly _postService: PostService;
  constructor(postService: PostService) {
    this._postService = postService;
    this.getPosts = this.getPosts.bind(this);
    this.getCommentsByPostId = this.getCommentsByPostId.bind(this);
    this.getPost = this.getPost.bind(this);
    this.createPost = this.createPost.bind(this);
    this.updatePost = this.updatePost.bind(this);
    this.deletePost = this.deletePost.bind(this);
  }
  async getPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await this._postService.getPosts();
      res.send(posts);
    } catch (error) {
      next(error);
    }
  }
  async getCommentsByPostId(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.postId;
      const comments = await this._postService.getCommentsByPostId(postId);
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }
  async getPost(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.postId;
      const post = await this._postService.getPost(postId);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = req.body;
      const createdPost = await this._postService.createPost(post);
      res.send(createdPost);
    } catch (error) {
      next(error);
    }
  }
  async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.postId;
      const post = req.body;
      await this._postService.updatePost(postId, post);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
  async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
      const postId = req.params.postId;
      await this._postService.deletePost(postId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
