import FormHeader from "./FormHeader";
import FormWindow from "./FormWindow";
import GAButton from "./GAButton";
import {
  DeleteAssignment,
  GetAssignments,
} from "../../services/AssignmentServices";

export default function DeleteAssignmentForm({
  assignment,
  user,
  changeModalState,
  setAssignments,
}) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user) {
      const handleDeletion = async (assignmentId, studentId) => {
        await DeleteAssignment(assignmentId);
        const updatedAssignments = await GetAssignments(studentId);
        setAssignments(updatedAssignments);
      };
      await handleDeletion(assignment.id, assignment.studentId);
    }
    e.target.value = "";
    changeModalState();
  };

  return (
    <FormWindow>
      <FormHeader>Delete Assignment</FormHeader>
      <form onSubmit={handleSubmit}>
        <p className="form-paragraph">
          Are you sure you want to delete {assignment.name}?
        </p>
        <GAButton>DELETE ASSIGNMENT</GAButton>
      </form>
    </FormWindow>
  );
}
