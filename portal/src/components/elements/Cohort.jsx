import Student from './Student'
import SVGDelete from './SVGs/SVGDelete'
import SVGUpdate from './SVGs/SVGUpdate'
import SVGAddStudent from './SVGs/SVGAddStudent'
import SVGAddAssignment from './SVGs/SVGAddAssignment'

export default function Cohort(){
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
          <SVGAddStudent/><SVGAddAssignment/><SVGUpdate/><SVGDelete/>
        </div>
      </div>
      <div className="cohortStudents">
        <div className="students">
          <Student/>
        </div>
      </div>
      </div>
    </section>
    
    </>
  )
}