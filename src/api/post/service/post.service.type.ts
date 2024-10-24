import { CommentListResponseDto } from "@/api/comment/dto/commentListResponse.dto";
import { PostListResponseDto } from "../dto/PostListResponse.dto";
import { PostResponseDto } from "../dto/postResponse.dto";

export interface PostService {
  getPosts(): Promise<PostListResponseDto>;
  getPost(postId: string): Promise<PostResponseDto>;
  createPost(post: Omit<IPost, "id" | "comment">): Promise<PostResponseDto>;
  updatePost(postId: string, post: Omit<IPost, "id" | "comment">): Promise<void>;
  deletePost(postId: string): Promise<void>;
  getCommentsByPostId(postId: string): Promise<CommentListResponseDto>;
}
