import axios from 'axios'

export default {
  state: () => ({
    user: null,
    token: null
  }),
  mutations: {
    SET_USER(state, payload) {
      state.user = payload.user
      state.token = payload.token
    }
  },
  actions: {
    async registerUser({ commit }, formData) {
      try {
        const response = await axios.post('http://localhost:8080/api/register', {
          email: formData.email,
          password: formData.password
        })
        
        commit('SET_USER', {
          user: response.data.user,
          token: response.data.token
        })
        
        localStorage.setItem('authToken', response.data.token)
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.token}`
        
        return { success: true }
      } catch (error) {
        console.error('Registration failed:', error.response?.data?.message)
        return { 
          success: false, 
          error: error.response?.data?.message || 'Ошибка регистрации' 
        }
      }
    }
  }
}