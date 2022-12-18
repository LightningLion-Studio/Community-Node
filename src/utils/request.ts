import axios from "axios"
const request = axios.create({
  baseURL: "https://api.light.xhhzs.cn/v2",
  timeout: 100000,
})
export default request
