import SVGUpdate from "./SVGs/SVGUpdate";
import SVGDelete from "./SVGs/SVGDelete";
import Modal from "./Modal";
import UpdateAssignmentForm from "../Forms/UpdateAssignmentForm";
import DeleteAssignmentForm from "../Forms/DeleteAssignmentForm";
import { useState } from "react";

export default function Assignment({ assignment, user, setAssignments }) {
  const showHide = (e) => {
    e.currentTarget.parentElement.classList.toggle("expanded");
  };
  const [updateAssignmentModalShow, setUpdateAssignmentModalShow] =
    useState(false);
  const [deleteAssignmentModalShow, setDeleteAssignmentModalShow] =
    useState(false);
  const changeUpdateAssignmentModalState = () => {
    setUpdateAssignmentModalShow(!updateAssignmentModalShow);
  };
  const changeDeleteAssignmentModalState = () => {
    setDeleteAssignmentModalShow(!deleteAssignmentModalShow);
  };
  return (
    <>
      <section
        className={assignment.gitHubURL ? "assignment" : "assignment missing"}
      >
        <div className="assignmentHeader" onClick={showHide}>
          <div className="assignmentInfo">
            <p>{assignment.name}</p>
          </div>
          <div className="assignmentLinks">
            <a href={assignment.gitHubURL}>Github</a>&nbsp;|&nbsp;
            <a href={assignment.deployedURL}>Deployed</a>
            <SVGUpdate />
          </div>
          <div className="assignmentCRUD">
            <SVGUpdate onClick={changeUpdateAssignmentModalState}/>
            <SVGDelete onClick={changeDeleteAssignmentModalState}/>
          </div>
        </div>
      </section>
      <Modal
        modalShow={updateAssignmentModalShow}
        setModalShow={setUpdateAssignmentModalShow}
        changeModalState={changeUpdateAssignmentModalState}
      >
        <UpdateAssignmentForm
          assignment={assignment}
          user={user}
          changeModalState={changeUpdateAssignmentModalState}
          setAssignments={setAssignments}
        />
      </Modal>
      <Modal
        modalShow={deleteAssignmentModalShow}
        setModalShow={setDeleteAssignmentModalShow}
        changeModalState={changeDeleteAssignmentModalState}
      >
        <DeleteAssignmentForm
          assignment={assignment}
          user={user}
          changeModalState={changeUpdateAssignmentModalState}
          setAssignments={setAssignments}
        />
      </Modal>
    </>
  );
}
