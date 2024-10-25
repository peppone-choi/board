import { CommentListResponseDto } from "@/api/comment/dto/commentListResponse.dto";
import { PostResponseDto } from "../dto/postResponse.dto";
import { PostListResponseDto } from "../dto/postListResponse.dto";

export interface PostService {
  getPosts(page: number, limit: number): Promise<PostListResponseDto>;
  getPost(postId: string): Promise<PostResponseDto>;
  createPost(post: Omit<IPost, "id" | "comment">): Promise<PostResponseDto>;
  updatePost(postId: string, post: Omit<IPost, "id" | "comment">): Promise<void>;
  deletePost(postId: string): Promise<void>;
  getCommentsByPostId(postId: string, page: number, limit: number): Promise<CommentListResponseDto>;
}
