import Client from './api'

export const GetCohorts = async (teacherId) => {
  try {
    const res = await Client.get(`/api/classes/${teacherId}`)
    return res.data
  } catch (error) {
    throw error
  }
}