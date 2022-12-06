import SVGPerson from './SVGs/SVGPerson';
import SVGUpdate from './SVGs/SVGUpdate';
import SVGDelete from './SVGs/SVGDelete';

export default function Student({ student, user }){
  const showHide = e=>{
    e.currentTarget.parentElement.classList.toggle("expanded")
  }
  return(
    <section className="student">
      <div className="studentHeader" onClick={showHide}>
        <div className="studentInfo">
        <SVGPerson/><h4>{student.firstName} {student.lastName}</h4>
        </div>
        <div className="studentCRUD">
          <SVGUpdate/>
          <SVGDelete/>
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
                  blah blah blah
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
  )
}