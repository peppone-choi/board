export class CommentResponseDto {
  id: string;
  post: IPost;
  content: string;
  ip: string;

  constructor(post: IComment) {
    this.id = post.id;
    this.post = post.post;
    this.content = post.content;
    this.ip = post.ip;
  }
}
