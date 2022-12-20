export * from "./post"
export * from "./user"
export * from "./follow"

import * as Post from "./post"
import * as User from "./user"
import * as Follow from "./follow"
export default {
  ...Post,
  ...User,
  ...Follow,
}
