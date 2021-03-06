// 包含了多个间接修改状态数据的方法---对象
// 引入axios
import axios from 'axios'
import { REQUEST, REQ_SUCCESS, REQ_ERROR } from './mutation-types.js'
export default {
  // 发送异步请求---搜索
  async search({commit},searchName){
    const url = `https://api.github.com/search/users`
    // 修改状态数据===
    commit(REQUEST)
    try {
      // 发送请求
      const response = await axios.get(url, {
        params: {
          q: searchName
        }
      })
      // 获取到了用户的相关信息
      const users = response.data.items.map(user => ({
        login: user.login,
        html_url: user.html_url,
        avatar_url: user.avatar_url
      }))
      // 更新状态数据------明天就知道了
      commit(REQ_SUCCESS,users)
    } catch (error) {
      // 更新状态数据
      commit(REQ_ERROR,error)
     
    }
  }
}