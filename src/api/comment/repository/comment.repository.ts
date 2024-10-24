export interface CommentRepository {
  findAll(): Promise<IComment[]>;
  findById(commentId: string): Promise<IComment>;
  save(comment: IComment): Promise<IComment>;
  update(commentId: string, comment: IComment): Promise<void>;
  delete(commentId: string): Promise<void>;
}
