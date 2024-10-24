import { Post } from "../model/post.model";
import { PostRepository } from "./post.repository";

export class MemoryPostRepository implements PostRepository {
  static index = 0;
  static readonly store: Map<string, Post> = new Map();
  async findAll(): Promise<IPost[]> {
    return Array.from(MemoryPostRepository.store.values());
  }
  async findById(postId: string): Promise<IPost> {
    const post = MemoryPostRepository.store.get(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    return post;
  }
  async findCommentsByPostId(postId: string): Promise<IComment[]> {
    const post = MemoryPostRepository.store.get(postId);
    if (!post) {
      throw new Error("Post not found");
    }
    return post.comment;
  }
  async save(post: Omit<IPost, "id" | "comment">): Promise<IPost> {
    const newPost = new Post({
      id: String(MemoryPostRepository.index++),
      title: post.title,
      content: post.content,
      ip: post.ip,
      comment: [],
    });
    MemoryPostRepository.store.set(newPost.id, newPost);
    return newPost;
  }
  async update(postId: string, post: Omit<IPost, "id" | "comment">): Promise<void> {
    const targetPost = MemoryPostRepository.store.get(postId);
    if (!targetPost) {
      throw new Error("Post not found");
    }
    MemoryPostRepository.store.set(postId, {
      ...targetPost,
      title: post.title,
      content: post.content,
      ip: post.ip,
    });
    return;
  }
  async delete(postId: string): Promise<void> {
    MemoryPostRepository.store.delete(postId);
    return;
  }
}
