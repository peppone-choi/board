import { Comment } from "../model/comment.model";
import { CommentRepository } from "./comment.repository";

export class MemoryCommentRepository implements CommentRepository {
  static index = 0;
  static readonly store: Map<string, Comment> = new Map();
  async findAll(): Promise<IComment[]> {
    return Array.from(MemoryCommentRepository.store.values());
  }
  async findById(commentId: string): Promise<IComment> {
    const comment = MemoryCommentRepository.store.get(commentId);
    if (!comment) {
      throw new Error("Comment not found");
    }
    return comment;
  }
  async save(comment: IComment): Promise<IComment> {
    const newComment = new Comment({
      id: MemoryCommentRepository.index.toString(),
      post: comment.post,
      content: comment.content,
      ip: comment.ip,
    });
    MemoryCommentRepository.store.set(newComment.id, newComment);
    MemoryCommentRepository.index++;
    return newComment;
  }
  async update(commentId: string, comment: IComment): Promise<void> {
    const updatedComment = new Comment({
      id: commentId,
      post: comment.post,
      content: comment.content,
      ip: comment.ip,
    });
    MemoryCommentRepository.store.set(commentId, updatedComment);
    return;
  }
  async delete(commentId: string): Promise<void> {
    MemoryCommentRepository.store.delete(commentId);
    return;
  }
}
