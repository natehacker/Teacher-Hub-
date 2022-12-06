import Client from './api'

export const GetCohorts = async (teacherId) => {
  try {
    const res = await Client.get(`/api/classes/${teacherId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateCohort = async (teacherId, data)=>{
  try{
    const res = await Client.post(`/api/classes/${teacherId}`, data);
    console.log(res.data)
    return res.data;
  }catch(err){
    throw err
  }
}

export const UpdateCohort = async (classId, data)=>{
  try{
    const res = await Client.put(`/api/classes/${classId}`, data);
    console.log(res.data)
    return res.data;
  }catch(err){
    throw err
  }
}