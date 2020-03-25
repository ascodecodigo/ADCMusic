import { login } from '@/api/user'
import { setToken } from '@/utils/cookies'

export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    async userLogin (context, user) {
      try {
        const res = await login(user.email, user.password)
        setToken(res.access_token)
      } catch (error) {}
    }
  }
}
