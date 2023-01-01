export * from "./post"
export * from "./user"
export * from "./follow"
export * from "./comment"
export * from "./category"
export * from "./tag"
export * from "./config"
export * from "./types/index"

import * as Post from "./post"
import * as User from "./user"
import * as Follow from "./follow"
import * as Comment from "./comment"
import * as Category from "./category"
import * as Tag from "./tag"
import * as Config from "./config"
import * as Types from "./types/index"
export default {
  ...Post,
  ...User,
  ...Follow,
  ...Comment,
  ...Category,
  ...Tag,
  ...Config,
  ...Types,
}
