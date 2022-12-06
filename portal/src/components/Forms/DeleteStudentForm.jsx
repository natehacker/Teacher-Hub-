import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { DeleteStudent } from "../../services/StudentServices";

export default function DeleteStudentForm({user, authenticated, student, setStudents, changeModalState}){

  // const handleSubmit = (e) => {
  //   e.preventDefault();
    
  //   if (user) {
  //     console.log(cohortId)
  //     const handleDeletion = async (classId) => {
  //       await DeleteCohort(classId);
  //     };
  //     handleDeletion(cohortId);
  //   }
  //   window.location.reload()
  //   e.target.value=""
  //   changeModalState();
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (user) {
      const handleDeletion = async (studentId) => {
        await DeleteStudent(studentId);
      };
      handleDeletion(student.id);
    }
    window.location.reload()
    e.target.value=""
    changeModalState();
  };


  return(
  <FormWindow>
    <FormHeader>Delete Student</FormHeader>
        <form onSubmit={handleSubmit}>
            <p className="form-paragraph">Are you sure you want to delete this Student?</p>
            <GAButton>DELETE STUDENT</GAButton>
        </form>



 </FormWindow>
  )
}