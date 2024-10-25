import { CommentResponseDto } from "./commentResponse.dto";

export class CommentListResponseDto {
  prov: string | null;
  next: string | null;
  comments: CommentResponseDto[];
  pageAll: number | null;
  count: number | null;
  constructor(comments: IComment[], pageAll: number, prov: string | null, next: string | null) {
    this.comments = comments.map((comment) => new CommentResponseDto(comment));
    this.pageAll = pageAll;
    this.count = comments.length;
    this.prov = prov && null;
    this.next = next && null;
  }
}
