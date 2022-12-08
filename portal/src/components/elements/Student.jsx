import SVGPerson from "./SVGs/SVGPerson";
import SVGUpdate from "./SVGs/SVGUpdate";
import SVGDelete from "./SVGs/SVGDelete";
import Modal from "./Modal";
import UpdateStudentForm from "../Forms/UpdateStudentForm";
import DeleteStudentForm from "../Forms/DeleteStudentForm";
import Assignment from "./Assignment";
import { useState, useEffect } from "react";
import { GetAssignments } from "../../services/AssignmentServices";

export default function Student({
  student,
  user,
  handleModalFormClick,
  students,
  setStudents,
}) {
  const showHide = (e) => {
    e.currentTarget.parentElement.classList.toggle("expanded");
  };
  const [updateStudentModalShow, setUpdateStudentModalShow] = useState(false);
  const [deleteStudentModalShow, setDeleteStudentModalShow] = useState(false);
  
  const [assignments, setAssignments] = useState([]);
  const changeUpdateStudentModalState = () => {
    setUpdateStudentModalShow(!updateStudentModalShow);
  };
  const changeDeleteStudentModalState = () => {
    setDeleteStudentModalShow(!deleteStudentModalShow);
  };
  useEffect(() => {
    if (user) {
      const handleAssignments = async (studentId) => {
        const data = await GetAssignments(studentId);
        setAssignments(data);
      };
      handleAssignments(student.id);
    }
  }, [user, student]);

  return (
    <>
      <section className="student">
        <div className="studentHeader" onClick={showHide}>
          <div className="studentInfo">
            <SVGPerson />
            <h4>
              {student.firstName} {student.lastName}
            </h4>
          </div>
          <div className="studentCRUD">
            <SVGUpdate onClick={changeUpdateStudentModalState} />
            <SVGDelete onClick={changeDeleteStudentModalState} />
          </div>
        </div>
        <div className="student_more">
          <div className="studentAssignments">
            <h5>Assignments</h5>
            <div className="assignmentsSection">
              <div className="unit">
                <div className="unitHeader" onClick={showHide}>
                  <h6>Unit1</h6>
                </div>
                <div className="unit_more">
                  {assignments.filter((elem) => elem.unit === 1).length ? (
                    assignments
                      .filter((elem) => elem.unit === 1)
                      .map((elem) => (
                        <Assignment
                          key={elem.id}
                          assignment={elem}
                          user={user}
                          handleModalFormClick={handleModalFormClick}
                          assignments={assignments}
                          setAssignments={setAssignments}
                        />
                      ))
                  ) : (
                    <p>There are no current unit 1 assignments</p>
                  )}
                </div>
              </div>
              <div className="unit">
                <div className="unitHeader" onClick={showHide}>
                  <h6>Unit2</h6>
                </div>
                <div className="unit_more">
                  {assignments.filter((elem) => elem.unit === 2).length ? (
                    assignments
                      .filter((elem) => elem.unit === 2)
                      .map((elem) => (
                        <Assignment
                          key={elem.id}
                          assignment={elem}
                          user={user}
                          handleModalFormClick={handleModalFormClick}
                          assignments={assignments}
                          setAssignments={setAssignments}
                        />
                      ))
                  ) : (
                    <p>There are no current unit 2 assignments</p>
                  )}
                </div>
              </div>
              <div className="unit">
                <div className="unitHeader" onClick={showHide}>
                  <h6>Unit3</h6>
                </div>
                <div className="unit_more">
                  {assignments.filter((elem) => elem.unit === 3).length ? (
                    assignments
                      .filter((elem) => elem.unit === 3)
                      .map((elem) => (
                        <Assignment
                          key={elem.id}
                          assignment={elem}
                          user={user}
                          handleModalFormClick={handleModalFormClick}
                          assignments={assignments}
                          setAssignments={setAssignments}
                        />
                      ))
                  ) : (
                    <p>There are no current unit 3 assignments</p>
                  )}
                </div>
              </div>
              <div className="unit">
                <div className="unitHeader" onClick={showHide}>
                  <h6>Unit4</h6>
                </div>
                <div className="unit_more">
                  {assignments.filter((elem) => elem.unit === 4).length ? (
                    assignments
                      .filter((elem) => elem.unit === 4)
                      .map((elem) => (
                        <Assignment
                          key={elem.id}
                          assignment={elem}
                          user={user}
                          handleModalFormClick={handleModalFormClick}
                          assignments={assignments}
                          setAssignments={setAssignments}
                        />
                      ))
                  ) : (
                    <p>There are no current unit 4 assignments</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Modal
        modalShow={updateStudentModalShow}
        setModalShow={setUpdateStudentModalShow}
        changeModalState={changeUpdateStudentModalState}
      >
        <UpdateStudentForm
          student={student}
          user={user}
          changeModalState={changeUpdateStudentModalState}
          setStudents={setStudents}
        />
      </Modal>
      <Modal
        modalShow={deleteStudentModalShow}
        setModalShow={setDeleteStudentModalShow}
        changeModalState={changeDeleteStudentModalState}
      >
        <DeleteStudentForm
          student={student}
          user={user}
          changeModalState={changeDeleteStudentModalState}
          setStudents={setStudents}
        />
      </Modal>
    </>
  );
}
