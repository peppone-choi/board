export interface CommentRepository {
  findAll(page: number, limit: number): Promise<IComment[]>;
  findById(commentId: string): Promise<IComment>;
  save(comment: Omit<IComment, "id" | "post">, post: IPost): Promise<IComment>;
  update(commentId: string, comment: Pick<IComment, "content">): Promise<void>;
  delete(commentId: string): Promise<void>;
  countAll(): Promise<number>;
}
