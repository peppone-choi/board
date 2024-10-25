import { MongooseComment } from "../model/comment.schema";
import { CommentRepository } from "./comment.repository";

export class MongooseRepository implements CommentRepository {
  async findAll(page: number, limit: number): Promise<IComment[]> {
    const comments = await MongooseComment.find()
      .skip((page - 1) * limit)
      .limit(limit)
      .populate("post");
    return comments;
  }
  async findById(commentId: string): Promise<IComment> {
    const comment = await MongooseComment.findById(commentId).populate("post");
    if (!comment) {
      throw new Error("Comment not found");
    }
    return comment;
  }
  async save(comment: Omit<IComment, "id" | "post">, post: IPost): Promise<IComment> {
    const newComment = new MongooseComment({
      post: post,
      content: comment.content,
      ip: comment.ip,
    });
    await newComment.save();
    return newComment;
  }
  async update(commentId: string, comment: Pick<IComment, "content">): Promise<void> {
    const isCommentExist = await MongooseComment.exists({ _id: commentId });
    if (!isCommentExist) {
      throw new Error("Comment not found");
    }
    await MongooseComment.findByIdAndUpdate(commentId, comment);
  }
  async delete(commentId: string): Promise<void> {
    const isCommentExist = await MongooseComment.exists({ _id: commentId });
    if (!isCommentExist) {
      throw new Error("Comment not found");
    }
    await MongooseComment.findByIdAndDelete(commentId);
  }
  async countAll(): Promise<number> {
    return await MongooseComment.countDocuments();
  }
}
