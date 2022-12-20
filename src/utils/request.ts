import axios from "axios"
const request = axios.create({
  baseURL: "https://api.light.xhhzs.cn/v2",
  timeout: 100000,
})

request.interceptors.response.use((res) => {
	return res
},(err) => {
  console.error("![Lightning API ERROR]")
	return Promise.reject(err)
})

export default request
