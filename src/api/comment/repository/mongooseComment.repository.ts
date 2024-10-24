import { MongooseComment } from "../model/comment.schema";
import { CommentRepository } from "./comment.repository";

export class MongooseRepository implements CommentRepository {
  async findAll(): Promise<IComment[]> {
    const comments = await MongooseComment.find();
    return comments;
  }
  async findById(commentId: string): Promise<IComment> {
    const comment = await MongooseComment.findById(commentId).populate("post");
    if (!comment) {
      throw new Error("Comment not found");
    }
    return comment;
  }
  async save(comment: IComment): Promise<IComment> {
    const newComment = new MongooseComment(comment);
    await newComment.save();
    return newComment;
  }
  async update(commentId: string, comment: IComment): Promise<void> {
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
}