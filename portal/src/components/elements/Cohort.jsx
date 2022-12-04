import Student from './Student'

export default function Cohort(){
  const showHide = e=>{
    e.currentTarget.parentElement.classList.toggle("expanded")
  }
  return(
    <section className="cohort">
      <div className="cohortHeader" onClick={showHide}>
      <h3>SEIR-1003</h3>
      </div>
      <div className="hideShow">
      <div className="cohortCrud">
        <div>
        
        </div>
      </div>
      <div className="cohortStudents">
        <div className="addToClassSection">
        <button className="addSomething">Student +</button>
        <button className="addSomething">Assignment +</button>
        </div>
        <div className="students">
          <Student/>
        </div>
      </div>
      </div>
    </section>
  )
}