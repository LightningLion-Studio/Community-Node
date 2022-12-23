import { basicPostList, datebaseUpdate } from "./common"

export interface TypeGetPost {
  code: number
  message: string
  cache: boolean
  limit: number
  offset: number
  data: Array<basicPostList>
}

export interface TypeGetSinglePost {
  code: number
  message: string
  data: basicPostList
}
