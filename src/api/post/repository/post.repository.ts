export interface PostRepository {
  findAll(page: number, limit: number): Promise<IPost[]>;
  findById(postId: string): Promise<IPost>;
  save(post: Omit<IPost, "id" | "comment">): Promise<IPost>;
  update(postId: string, post: Omit<IPost, "id" | "comment">): Promise<void>;
  delete(postId: string): Promise<void>;
  findCommentsByPostId(
    postId: string,
    page: number,
    limit: number
  ): Promise<{
    comment: IComment[];
    totalPage: number;
  }>;
  countAll(): Promise<number>;
}
