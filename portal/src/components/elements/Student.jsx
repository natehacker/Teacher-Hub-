import SVGPerson from './SVGs/SVGPerson';
import SVGUpdate from './SVGs/SVGUpdate';
import SVGDelete from './SVGs/SVGDelete';
import Modal from './Modal'
import UpdateStudentForm from '../Forms/UpdateStudentForm'
import DeleteStudentForm from '../Forms/DeleteStudentForm';
import Assignment from './Assignment';
import {useState} from "react";

export default function Student({ student, user }){
  const showHide = e=>{
    e.currentTarget.parentElement.classList.toggle("expanded")
  }
  const [updateStudentModalShow, setUpdateStudentModalShow] = useState(false);
  const [deleteStudentModalShow, setDeleteStudentModalShow] = useState(false);
  const changeUpdateStudentModalState = ()=>{
    setUpdateStudentModalShow(!updateStudentModalShow)
  }
  const changeDeleteStudentModalState = ()=>{
    setDeleteStudentModalShow(!deleteStudentModalShow)
  }
  return(
    <>
    <section className="student">
      <div className="studentHeader" onClick={showHide}>
        <div className="studentInfo">
        <SVGPerson/><h4>{student.firstName} {student.lastName}</h4>
        </div>
        <div className="studentCRUD">
          <SVGUpdate onClick={changeUpdateStudentModalState}/>
          <SVGDelete onClick={changeDeleteStudentModalState}/>
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
                  <Assignment/>
                </div>
              </div>
              <div className="unit">
                <div className="unitHeader" onClick={showHide}>
                  <h6>Unit2</h6>
                </div>
              </div>
              <div className="unit">
                <div className="unitHeader" onClick={showHide}>
                  <h6>Unit3</h6>
                </div>
              </div>
              <div className="unit">
                <div className="unitHeader" onClick={showHide}>
                  <h6>Unit4</h6>
                </div>
              </div>
            </div>
        </div>
      
      </div>
    </section>
    <Modal modalShow={updateStudentModalShow} setModalShow={setUpdateStudentModalShow} changeModalState={changeUpdateStudentModalState}>
      <UpdateStudentForm
      student={student}
      user={user}
      changeModalState={changeUpdateStudentModalState}/>
    </Modal>
    <Modal modalShow={deleteStudentModalShow} setModalShow={setDeleteStudentModalShow} changeModalState={changeDeleteStudentModalState}>
      <DeleteStudentForm
      student={student}
      user={user}
      changeModalState={changeDeleteStudentModalState}/>
    </Modal>
    </>
  )
}