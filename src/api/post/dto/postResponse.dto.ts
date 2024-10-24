export class PostResponseDto {
  id: string;
  title: string;
  content: string;
  ip: string;

  constructor(post: IPost) {
    this.id = post.id;
    this.title = post.title;
    this.content = post.content;
    this.ip = post.ip;
  }
}
