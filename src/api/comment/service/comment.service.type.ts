import { CommentListResponseDto } from "../dto/commentListResponse.dto";
import { CommentResponseDto } from "../dto/commentResponse.dto";

export interface CommentService {
  getComments(page: number, limit: number): Promise<CommentListResponseDto>;
  getComment(commentId: string): Promise<CommentResponseDto>;
  createComment(comment: Omit<IComment, "id" | "post">, postId: string): Promise<CommentResponseDto>;
  updateComment(commentId: string, comment: Pick<IComment, "content">): Promise<void>;
  deleteComment(commentId: string): Promise<void>;
}
