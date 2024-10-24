export class Comment implements IComment {
  id: string;
  post: IPost;
  content: string;
  ip: string;
  constructor(comment: IComment) {
    this.id = comment.id;
    this.post = comment.post;
    this.content = comment.content;
    this.ip = comment.ip;
  }
}
