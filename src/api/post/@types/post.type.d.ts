interface IPost {
  id: string;
  title: string;
  content: string;
  ip: string;
  comment: IComment[];
}
