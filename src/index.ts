export * from "./post"
export * from "./user"

import * as Post from "./post"
import * as User from "./user"

export default {
  ...Post,
  ...User,
}
