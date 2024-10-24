import { CommentListResponseDto } from "@/api/comment/dto/commentListResponse.dto";
import { PostListResponseDto } from "../dto/PostListResponse.dto";
import { PostResponseDto } from "../dto/postResponse.dto";
import { PostRepository } from "../repository/post.repository";
import { PostService } from "./post.service.type";

export default class PostServiceImpl implements PostService {
  private readonly _PostRepository: PostRepository;
  constructor(PostRepository: PostRepository) {
    this._PostRepository = PostRepository;
  }
  async getPosts(): Promise<PostListResponseDto> {
    const posts = await this._PostRepository.findAll();
    return new PostListResponseDto(posts, "prev", "next");
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
  async getCommentsByPostId(postId: string): Promise<CommentListResponseDto> {
    const comments = await this._PostRepository.findCommentsByPostId(postId);
    return new CommentListResponseDto(comments, "prev", "next");
  }
}
