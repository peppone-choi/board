import { CommentListResponseDto } from "@/api/comment/dto/commentListResponse.dto";

import { PostResponseDto } from "../dto/postResponse.dto";
import { PostRepository } from "../repository/post.repository";
import { PostService } from "./post.service.type";
import { PostListResponseDto } from "../dto/postListResponse.dto";

export default class PostServiceImpl implements PostService {
  private readonly _PostRepository: PostRepository;
  constructor(PostRepository: PostRepository) {
    this._PostRepository = PostRepository;
  }
  async getPosts(page: number, limit: number): Promise<PostListResponseDto> {
    const posts = await this._PostRepository.findAll(page, limit);
    const totalPosts = await this._PostRepository.countAll();
    const totalPage = Math.ceil(totalPosts / limit);
    return new PostListResponseDto(posts, totalPage ? totalPage : 0, page - 1 < 0 ? null : `?page=${page - 1}&limit=${limit}`, page + 1 > totalPage ? null : `?page=${page + 1}&limit=${limit}`);
  }

  async getPost(postId: string): Promise<PostResponseDto> {
    const post = await this._PostRepository.findById(postId);
    return new PostResponseDto(post);
  }
  async createPost(post: Omit<IPost, "id" | "comment">): Promise<PostResponseDto> {
    const createdPost = await this._PostRepository.save(post);
    return new PostResponseDto(createdPost);
  }
  async updatePost(postId: string, post: Omit<IPost, "id" | "comment">): Promise<void> {
    this._PostRepository.update(postId, post);
  }
  async deletePost(postId: string): Promise<void> {
    this._PostRepository.delete(postId);
  }
  async getCommentsByPostId(postId: string, page: number, limit: number): Promise<CommentListResponseDto> {
    const comments = await this._PostRepository.findCommentsByPostId(postId, page, limit);
    return new CommentListResponseDto(
      comments.comment,
      comments.totalPage,
      page - 1 < 0 ? null : `?page=${page - 1}&limit=${limit}`,
      page + 1 > comments.totalPage ? null : `?page=${page + 1}&limit=${limit}`
    );
  }
}
