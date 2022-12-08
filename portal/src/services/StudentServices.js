import Client from './api'


export const GetStudents = async (classId) => {
    try {
      const res = await Client.get(`/api/students/${classId}`)
      return res.data
    } catch (error) {
      throw error
    }
  }
  export const CreateStudent = async (classId, data)=>{
    try{
      const res = await Client.post(`/api/students/${classId}`, data);
      return res.data;
    }catch(err){
      throw err
    }
  }

  export const UpdateStudent = async (studentId, data)=>{
    try{
      const res = await Client.put(`/api/students/${studentId}`, data);
      return res.data;
    }catch(err){
      throw err
    }
  }
  
  export const DeleteStudent = async (studentId)=>{
    try{
      const res = await Client.delete(`/api/students/${studentId}`);
      return res.data;
    }catch(err){
      throw err
    }
  }