import { PostRepository } from "@/api/post/repository/post.repository";
import { CommentListResponseDto } from "../dto/commentListResponse.dto";
import { CommentResponseDto } from "../dto/commentResponse.dto";
import { CommentRepository } from "../repository/comment.repository";
import { CommentService } from "./comment.service.type";

export default class CommentServiceImpl implements CommentService {
  private readonly _commentRepository: CommentRepository;
  private readonly _postRepository: PostRepository;
  constructor(commentRepository: CommentRepository, postRepository: PostRepository) {
    this._commentRepository = commentRepository;
    this._postRepository = postRepository;
  }
  async getComments(page: number, limit: number): Promise<CommentListResponseDto> {
    const comments = await this._commentRepository.findAll(page, limit);
    const totalComments = await this._commentRepository.countAll();
    const totalPage = Math.ceil(totalComments / limit);
    return new CommentListResponseDto(comments, totalPage ? totalPage : 0, page - 1 < 0 ? null : `?page=${page - 1}&limit=${limit}`, page + 1 > totalPage ? null : `?page=${page + 1}&limit=${limit}`);
  }
  async getComment(commentId: string): Promise<CommentResponseDto> {
    const comment = await this._commentRepository.findById(commentId);
    return new CommentResponseDto(comment);
  }
  async createComment(comment: Omit<IComment, "id" | "post">, postId: string): Promise<CommentResponseDto> {
    const post = await this._postRepository.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    const createdComment = await this._commentRepository.save(comment, post);
    return new CommentResponseDto(createdComment);
  }
  async updateComment(commentId: string, comment: Pick<IComment, "content">): Promise<void> {
    await this._commentRepository.update(commentId, comment);
  }
  async deleteComment(commentId: string): Promise<void> {
    this._commentRepository.delete(commentId);
  }
}
