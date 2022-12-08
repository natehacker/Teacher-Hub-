import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import { DeleteAssignment, GetAssignments } from "../../services/AssignmentServices"

export default function DeleteAssignmentForm({
  assignment, user, changeModalState, setAssignments
}){
  // console.log(`assignment id = ${assignment.id}`)
  // console.log(user)

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("function ran")
  //   if (user) {
  //     console.log("conditional ran")
  //     const handleDeletion = async (assignmentId) => {
  //       await DeleteAssignment(assignmentId);
  //     };
  //     handleDeletion(assignment.id);
  //   }
  //   window.location.reload()
  //   e.target.value=""
  //   changeModalState();
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const handleDeletion = async (assignmentId, studentId) => {
        await DeleteAssignment(assignmentId);
        const updatedAssignments = await GetAssignments(studentId);
          setAssignments(updatedAssignments);
      };
      await handleDeletion(assignment.id, assignment.studentId)
    }
    e.target.value=""
    changeModalState();
  };



  return(
  <FormWindow>
    <FormHeader>Delete Assignment</FormHeader>
        <form onSubmit={handleSubmit}>
            <p className="form-paragraph">Are you sure you want to delete this assignment?</p>
            <GAButton>DELETE ASSIGNMENT</GAButton>
        </form>



 </FormWindow>
  )
}