import { CommentListResponseDto } from "../dto/commentListResponse.dto";
import { CommentResponseDto } from "../dto/commentResponse.dto";
import { CommentRepository } from "../repository/comment.repository";
import { CommentService } from "./comment.service.type";

export default class CommentServiceImpl implements CommentService {
  private readonly _commentRepository: CommentRepository;
  constructor(commentRepository: CommentRepository) {
    this._commentRepository = commentRepository;
  }
  async getComments(): Promise<CommentListResponseDto> {
    const comments = await this._commentRepository.findAll();
    return new CommentListResponseDto(comments, "prev", "next");
  }
  async getComment(commentId: string): Promise<CommentResponseDto> {
    const comment = await this._commentRepository.findById(commentId);
    return new CommentResponseDto(comment);
  }
  async createComment(comment: IComment): Promise<CommentResponseDto> {
    const createdComment = await this._commentRepository.save(comment);
    return new CommentResponseDto(createdComment);
  }
  async updateComment(commentId: string, comment: IComment): Promise<void> {
    this._commentRepository.update(commentId, comment);
  }
  async deleteComment(commentId: string): Promise<void> {
    this._commentRepository.delete(commentId);
  }
}
