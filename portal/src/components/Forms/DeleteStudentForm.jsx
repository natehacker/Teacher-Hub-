import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { DeleteStudent, GetStudents } from "../../services/StudentServices";

export default function DeleteStudentForm({user, authenticated, student, setStudents, changeModalState}){

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const handleDeletion = async (studentId, classId) => {
        await DeleteStudent(studentId);
        const updatedStudents = await GetStudents(classId);
        setStudents(updatedStudents);
      };
      await handleDeletion(student.id, student.classId);
    }
    e.target.value=""
    changeModalState();
  };


  return(
  <FormWindow>
    <FormHeader>Delete Student</FormHeader>
        <form onSubmit={handleSubmit}>
            <p className="form-paragraph">Are you sure you want to delete <strong>{student.firstName} {student.lastName}</strong>?</p>
            <GAButton>DELETE STUDENT</GAButton>
        </form>



 </FormWindow>
  )
}