import { CommentListResponseDto } from "../dto/commentListResponse.dto";
import { CommentResponseDto } from "../dto/commentResponse.dto";

export interface CommentService {
  getComments(): Promise<CommentListResponseDto>;
  getComment(commentId: string): Promise<CommentResponseDto>;
  createComment(comment: IComment): Promise<CommentResponseDto>;
  updateComment(commentId: string, comment: IComment): Promise<void>;
  deleteComment(commentId: string): Promise<void>;
}
