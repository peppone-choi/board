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
  async getPosts(req: Request<getPostsRequest["path"], getPostsResponse, getPostsRequest["body"], getPostsRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { page, limit } = req.query;
      const posts = await this._postService.getPosts(page, limit);
      console.log(posts);
      res.send(posts);
    } catch (error) {
      next(error);
    }
  }
  async getCommentsByPostId(
    req: Request<getCommentsByPostIdRequest["path"], getCommentsByPostIdResponse, getCommentsByPostIdRequest["body"], getCommentsByPostIdRequest["params"]>,
    res: Response,
    next: NextFunction
  ) {
    try {
      const { postId } = req.params;
      const { page, limit } = req.query;
      const comments = await this._postService.getCommentsByPostId(postId, page, limit);
      res.send(comments);
    } catch (error) {
      next(error);
    }
  }
  async getPost(req: Request<getPostRequest["path"], getPostResponse, getPostRequest["body"], getPostRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { postId } = req.params;
      const post = await this._postService.getPost(postId);
      res.send(post);
    } catch (error) {
      next(error);
    }
  }
  async createPost(req: Request<createPostRequest["path"], createPostResponse, createPostRequest["body"], createPostRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { title, content } = req.body;
      const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
      if (!ip) {
        throw new Error("Invalid IP");
      }
      console.log(ip);
      const createdPost = await this._postService.createPost({
        title,
        content,
        ip: "122.122.122.2",
      });
      res.send(createdPost);
    } catch (error) {
      next(error);
    }
  }
  async updatePost(req: Request<updatePostRequest["path"], unknown, updatePostRequest["body"], updatePostRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const postId = req.params.postId;
      const { title, content, ip } = req.body;
      await this._postService.updatePost(postId, {
        title,
        content,
        ip,
      });
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
  async deletePost(req: Request<deletePostRequest["path"], unknown, deletePostRequest["body"], deletePostRequest["params"]>, res: Response, next: NextFunction) {
    try {
      const { postId } = req.params;
      await this._postService.deletePost(postId);
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  }
}
