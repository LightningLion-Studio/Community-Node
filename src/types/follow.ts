export interface TypeGetFollow {
  code: number
  message: string
  data: Array<{
    time: number
    follow: number
    befollow: number
  }>
}

export interface TypeGetUserFollowStatic {
  code: 500 | 200
  message: string
  follow: number
  fans: number
}
