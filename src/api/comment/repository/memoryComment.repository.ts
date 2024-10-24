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
  async save(comment: Omit<IComment, "id" | "post">, post: IPost): Promise<IComment> {
    const newComment = new Comment({
      id: String(MemoryCommentRepository.index++),
      post: post,
      content: comment.content,
      ip: comment.ip,
    });
    MemoryCommentRepository.store.set(newComment.id, newComment);
    return newComment;
  }
  async update(commentId: string, comment: Pick<IComment, "content">): Promise<void> {
    const targetComment = MemoryCommentRepository.store.get(commentId);
    if (!targetComment) {
      throw new Error("Comment not found");
    }
    const updatedComment = {
      ...targetComment,
      content: comment.content,
    };
    MemoryCommentRepository.store.set(commentId, updatedComment);
    return;
  }
  async delete(commentId: string): Promise<void> {
    MemoryCommentRepository.store.delete(commentId);
    return;
  }
}
