import { PostResponseDto } from "./postResponse.dto";

export class PostListResponseDto {
  prov: string | null;
  next: string | null;
  posts: PostResponseDto[];
  pageAll: number;
  count: number;
  constructor(posts: IPost[], pageAll: number, prov: string | null, next: string | null) {
    this.posts = posts.map((post) => new PostResponseDto(post));
    this.pageAll = pageAll;
    this.count = posts.length;
    this.prov = prov && null;
    this.next = next && null;
  }
}
