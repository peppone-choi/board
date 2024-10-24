import { MongoosePost } from "../model/post.schema";
import { PostRepository } from "./post.repository";

export class MongooseRepository implements PostRepository {
  async findAll(): Promise<IPost[]> {
    const posts = await MongoosePost.find();
    return posts;
  }
  async findById(postId: string): Promise<IPost> {
    const post = await MongoosePost.findById(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }
  async findCommentsByPostId(postId: string): Promise<IComment[]> {
    const post = await MongoosePost.findById(postId).populate("comment");
    if (!post) {
      throw new Error("Post not found");
    }
    return post.comment;
  }
  async save(post: Omit<IPost, "id" | "comment">): Promise<IPost> {
    const newPost = new MongoosePost(post);
    await newPost.save();
    return newPost;
  }
  async update(postId: string, post: Omit<IPost, "id" | "comment">): Promise<void> {
    const isPostExist = await MongoosePost.exists({ _id: postId });
    if (!isPostExist) {
      throw new Error("Post not found");
    }
    await MongoosePost.findByIdAndUpdate(postId, post);
    return;
  }
  async delete(postId: string): Promise<void> {
    const isPostExist = await MongoosePost.exists({ _id: postId });
    if (!isPostExist) {
      throw new Error("Post not found");
    }
    await MongoosePost.findByIdAndDelete(postId);
    return;
  }
}
