const POST_ROUTES = {
  POST_API: "/api/post",
} as const;

const COMMENT_ROUTES = {
  COMMENT_API: "/api/comment",
} as const;

export const ROUTES_INDEX = {
  ...POST_ROUTES,
  ...COMMENT_ROUTES,
} as const;
