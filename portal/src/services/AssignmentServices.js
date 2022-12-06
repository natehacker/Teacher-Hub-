import Client from './api'

export const GetAssignments = async (studentId) => {
  try {
    const res = await Client.get(`/api/assignments/${studentId}`)
    return res.data
  } catch (error) {
    throw error
  }
}

export const CreateAssignment = async (classId, data)=>{
  try{
    const res = await Client.post(`/api/assignments/${classId}`, data);
    console.log(res.data)
    return res.data;
  }catch(err){
    throw err
  }
}

export const UpdateAssignment = async (assignmentId, data)=>{
  try{
    const res = await Client.put(`/api/assignments/${assignmentId}`, data);
    console.log(res.data)
    return res.data;
  }catch(err){
    throw err
  }
}

export const DeleteAssignment = async (assignmentId)=>{
  try{
    const res = await Client.delete(`/api/assignments/${assignmentId}`);
    console.log(res.data)
    return res.data;
  }catch(err){
    throw err
  }
}