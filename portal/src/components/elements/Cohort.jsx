import Student from "./Student";
import SVGDelete from "./SVGs/SVGDelete";
import SVGUpdate from "./SVGs/SVGUpdate";
import SVGAddStudent from "./SVGs/SVGAddStudent";
import SVGAddAssignment from "./SVGs/SVGAddAssignment";
import Modal from "./Modal";
import AddAssignmentForm from "../Forms/AddAssignmentForm";
import AddStudentForm from "../Forms/AddStudentForm";
import UpdateClassForm from "../Forms/UpdateClassForm";
import DeleteClassForm from "../Forms/DeleteClassForm";
import { useState, useEffect } from "react";
import { GetStudents } from "../../services/StudentServices";

export default function Cohort({
  handleModalFormClick,
  cohortId,
  cohortName,
  user,
  authenticated,
  cohorts,
  setCohorts,
  renderState,
  setRenderState,
}) {
  const [students, setStudents] = useState([]);
  const [allAssignments, setAllAssignments] = useState(false);

  const showHide = (e) => {
    e.currentTarget.parentElement.classList.toggle("expanded");
  };
  const [addStudentModalShow, setAddStudentModalShow] = useState(false);
  const [addAssignmentModalShow, setAddAssignmentModalShow] = useState(false);
  const [updateClassModalShow, setUpdateClassModalShow] = useState(false);
  const [deleteClassModalShow, setDeleteClassModalShow] = useState(false);

  const changeAddStudentModalState = () => {
    setAddStudentModalShow(!addStudentModalShow);
  };
  const changeAddAssignmentModalState = () => {
    setAddAssignmentModalShow(!addAssignmentModalShow);
  };
  const changeUpdateClassModalState = () => {
    setUpdateClassModalShow(!updateClassModalShow);
  };
  const changeDeleteClassModalState = () => {
    setDeleteClassModalShow(!deleteClassModalShow);
  };
  useEffect(() => {
    if (user) {
      const handleStudents = async (cohortId) => {
        const data = await GetStudents(cohortId);
        setStudents(data);
      };
      handleStudents(cohortId);
    }
  }, [user, cohortId]);

  return (
    <div>
      <section className="cohort">
        <div className="cohortHeader" onClick={showHide}>
          <h3>{cohortName}</h3>
        </div>
        <div className="cohort_more">
          <div className="cohortCrud">
            <div className="icons">
              <SVGAddStudent
                onClick={changeAddStudentModalState}
                id="addStudent"
              />
              <SVGAddAssignment
                onClick={changeAddAssignmentModalState}
                id="addAssignment"
              />
              <SVGUpdate onClick={changeUpdateClassModalState} />
              <SVGDelete onClick={changeDeleteClassModalState} />
            </div>
          </div>
          <div className="cohortStudents">
            <div className="students">
              {students.length ? (
                students.map((elem) => (
                  <Student
                    key={elem.id}
                    student={elem}
                    user={user}
                    handleModalFormClick={handleModalFormClick}
                    students={students}
                    setStudents={setStudents}
                  />
                ))
              ) : (
                <p>You don't currently have any students</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Modal
        modalShow={addStudentModalShow}
        setModalShow={setAddStudentModalShow}
        changeModalState={changeAddStudentModalState}
      >
        <AddStudentForm
          onClick={handleModalFormClick}
          cohortId={cohortId}
          students={students}
          setStudents={setStudents}
          user={user}
          changeModalState={changeAddStudentModalState}
          setRenderState={setRenderState}
          renderState={renderState}
        />
      </Modal>
      <Modal
        modalShow={addAssignmentModalShow}
        setModalShow={setAddAssignmentModalShow}
        changeModalState={changeAddAssignmentModalState}
      >
        <AddAssignmentForm
          onClick={handleModalFormClick}
          authenticated={authenticated}
          changeModalState={changeAddAssignmentModalState}
          cohortId={cohortId}
          user={user}
          setAllAssignments={setAllAssignments}
          allAssignments={allAssignments}
          setStudents={setStudents}
          students={students}
        />
      </Modal>
      <Modal
        modalShow={updateClassModalShow}
        setModalShow={setUpdateClassModalShow}
        changeModalState={changeUpdateClassModalState}
      >
        <UpdateClassForm
          user={user}
          authenticated={authenticated}
          cohorts={cohorts}
          setCohorts={setCohorts}
          onClick={handleModalFormClick}
          changeModalState={changeUpdateClassModalState}
          cohortId={cohortId}
          cohortName={cohortName}
        />
      </Modal>
      <Modal
        modalShow={deleteClassModalShow}
        setModalShow={setDeleteClassModalShow}
        changeModalState={changeDeleteClassModalState}
      >
        <DeleteClassForm
          onClick={handleModalFormClick}
          cohortId={cohortId}
          changeModalState={changeDeleteClassModalState}
          user={user}
          setCohorts={setCohorts}
          cohortName={cohortName}
        />
      </Modal>
    </div>
  );
}
