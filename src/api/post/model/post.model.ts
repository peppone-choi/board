export class Post implements IPost {
  id: string;
  title: string;
  content: string;
  ip: string;
  comment: IComment[];

  constructor(post: IPost) {
    this.id = post.id;
    this.title = post.title;
    this.content = post.content;
    this.ip = post.ip;
    this.comment = post.comment;
  }
}
