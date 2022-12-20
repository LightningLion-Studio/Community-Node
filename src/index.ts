export * from "./post"
export * from "./user"
export * from "./follow"

import * as Post from "./post"
import * as User from "./user"
import * as Follow from "./follow"
import * as Comment from "./comment"
export default {
  ...Post,
  ...User,
  ...Follow,
  ...Comment,
}
