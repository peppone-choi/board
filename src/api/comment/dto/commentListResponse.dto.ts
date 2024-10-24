import { CommentResponseDto } from "./commentResponse.dto";

export class CommentListResponseDto {
  prov: string;
  next: string;
  comments: CommentResponseDto[];
  countAll: number;
  count: number;
  constructor(comments: IComment[], prov: string, next: string) {
    this.comments = comments.map((comment) => new CommentResponseDto(comment));
    this.countAll = comments.length;
    this.count = comments.length;
    this.prov = prov;
    this.next = next;
  }
}
