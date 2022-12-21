export * from "./post"
export * from "./user"
export * from "./follow"
export * from "./comment"
export * from "./category"
export * from "./tag"

import * as Post from "./post"
import * as User from "./user"
import * as Follow from "./follow"
import * as Comment from "./comment"
import * as Category from "./category"
import * as Tag from "./tag"
export default {
  ...Post,
  ...User,
  ...Follow,
  ...Comment,
  ...Category,
  ...Tag,
}
