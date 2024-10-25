declare type getCommentsRequestPath = unknown;
declare type getCommentsRequestBody = unknown;
declare type getCommentsRequestParams = {
  page: number;
  limit: number;
};

declare type getCommentsRequest = {
  params: getCommentsRequestParams;
  body?: getCommentsRequestBody;
  path?: getCommentsRequestPath;
};

declare type getCommentsResponse = IComment[];

declare type getCommentRequestPath = {
  commentId: string;
};

declare type getCommentRequestBody = unknown;
declare type getCommentRequestParams = unknown;

declare type getCommentRequest = {
  params?: getCommentRequestParams;
  body?: getCommentRequestBody;
  path: getCommentRequestPath;
};

declare type getCommentResponse = IComment;

declare type createCommentRequestPath = unknown;
declare type createCommentRequestBody = {
  postId: string;
  content: string;
  ip: string;
};
declare type createCommentRequestParams = unknown;

declare type createCommentRequest = {
  params?: createCommentRequestParams;
  body: createCommentRequestBody;
  path?: createCommentRequestPath;
};

declare type createCommentResponse = IComment;

declare type updateCommentRequestPath = {
  commentId: string;
};

declare type updateCommentRequestBody = {
  content: string;
};

declare type updateCommentRequestParams = unknown;

declare type updateCommentRequest = {
  params?: updateCommentRequestParams;
  body: updateCommentRequestBody;
  path: updateCommentRequestPath;
};

declare type updateCommentResponse = unknown;

declare type deleteCommentRequestPath = {
  commentId: string;
};

declare type deleteCommentRequestBody = unknown;

declare type deleteCommentRequestParams = unknown;

declare type deleteCommentRequest = {
  params?: deleteCommentRequestParams;
  body?: deleteCommentRequestBody;
  path: deleteCommentRequestPath;
};

declare type deleteCommentResponse = unknown;
