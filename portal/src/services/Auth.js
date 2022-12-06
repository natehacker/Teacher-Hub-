import Client from './api'

export const SignInUser = async (data) => {
  try {
    const res = await Client.post('api/teachers/login', data)
    // Set the current signed in users token to localStorage
    localStorage.setItem('token', res.data.token)
    localStorage.setItem('user',res.data.user)
    return res.data.user
  } catch (error) {
    throw error
  }
}

export const RegisterUser = async (data) => {
  try {
    const res = await Client.post('api/teachers/register', data)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CheckSession = async () => {
  try {
    // Checks if the current token if it exists is valid
    const res = await Client.get('api/teachers/session')
    return res.data
  } catch (error) {
    throw error
  }
}