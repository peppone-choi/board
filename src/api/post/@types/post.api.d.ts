declare type getPostsRequestPath = unknown;
declare type getPostsRequestBody = unknown;
declare type getPostsRequestParams = unknown;

declare type getPostsRequest = {
  params?: getPostsRequestParams;
  body?: getPostsRequestBody;
  path?: getPostsRequestPath;
};

declare type getPostsResponse = Array<IComment>;

declare type getCommentsByPostIdRequestPath = {
  postId: string;
};
declare type getCommentsByPostIdRequestBody = unknown;
declare type getCommentsByPostIdRequestParams = unknown;

declare type getCommentsByPostIdRequest = {
  params?: getCommentsByPostIdRequestParams;
  body?: getCommentsByPostIdRequestBody;
  path: getCommentsByPostIdRequestPath;
};

declare type getCommentsByPostIdResponse = Array<IComment>;

declare type getPostRequestPath = {
  postId: string;
};
declare type getPostRequestBody = unknown;
declare type getPostRequestParams = unknown;

declare type getPostRequest = {
  params?: getPostRequestParams;
  body?: getPostRequestBody;
  path: getPostRequestPath;
};

declare type getPostResponse = IPost;

declare type createPostRequestPath = unknown;
declare type createPostRequestBody = {
  title: string;
  content: string;
  ip: string;
};
declare type createPostRequestParams = unknown;

declare type createPostRequest = {
  params?: createPostRequestParams;
  body: createPostRequestBody;
  path?: createPostRequestPath;
};

declare type createPostResponse = IPost;

declare type updatePostRequestPath = {
  postId: string;
};

declare type updatePostRequestBody = {
  title: string;
  content: string;
  ip: string;
};

declare type updatePostRequestParams = unknown;

declare type updatePostRequest = {
  params?: updatePostRequestParams;
  body: updatePostRequestBody;
  path: updatePostRequestPath;
};

declare type updatePostResponse = void;

declare type deletePostRequestPath = {
  postId: string;
};

declare type deletePostRequestBody = unknown;

declare type deletePostRequestParams = unknown;

declare type deletePostRequest = {
  params?: deletePostRequestParams;
  body?: deletePostRequestBody;
  path: deletePostRequestPath;
};

declare type deletePostResponse = void;
