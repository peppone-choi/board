import { PostResponseDto } from "./postResponse.dto";

export class PostListResponseDto {
  prov: string;
  next: string;
  posts: PostResponseDto[];
  countAll: number;
  count: number;
  constructor(posts: IPost[], prov: string, next: string) {
    this.posts = posts.map((post) => new PostResponseDto(post));
    this.countAll = posts.length;
    this.count = posts.length;
    this.prov = prov;
    this.next = next;
  }
}
