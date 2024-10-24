export interface PostRepository {
  findAll(): Promise<IPost[]>;
  findById(postId: string): Promise<IPost>;
  save(post: Omit<IPost, "id" | "comment">): Promise<IPost>;
  update(postId: string, post: Omit<IPost, "id" | "comment">): Promise<void>;
  delete(postId: string): Promise<void>;
  findCommentsByPostId(postId: string): Promise<IComment[]>;
}
