import Student from './Student'
import SVGDelete from './SVGs/SVGDelete'
import SVGUpdate from './SVGs/SVGUpdate'
import SVGAddStudent from './SVGs/SVGAddStudent'
import SVGAddAssignment from './SVGs/SVGAddAssignment'
import Modal from "./Modal";
import AddAssignmentForm from '../Forms/AddAssignmentForm'
import AddStudentForm from '../Forms/AddStudentForm'

export default function Cohort(props){
  const showHide = e=>{
    e.currentTarget.parentElement.classList.toggle("expanded")
  }
  return(
    <>
    <section className="cohort">
      <div className="cohortHeader" onClick={showHide}>
      <h3>SEIR-1003</h3>
      </div>
      <div className="cohort_more">
      <div className="cohortCrud">
        <div className="icons">
          <SVGAddStudent id="addStudent"/><SVGAddAssignment id="addAssignment"/><SVGUpdate/><SVGDelete/>
        </div>
      </div>
      <div className="cohortStudents">
        <div className="students">
          <Student/>
        </div>
      </div>
      </div>
    </section>
    <Modal>
      <AddStudentForm onClick={props.handleModalFormClick}/>
    </Modal>
    <Modal>
      <AddAssignmentForm onClick={props.handleModalFormClick}/>
    </Modal>
    </>
  )
}