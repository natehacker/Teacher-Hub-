import "../Portal.css"
import Cohort from "./elements/Cohort"

export default function Portal(){
  return(
    <>
    <section className="portal">
      <div className="sectionHeader">
      <h2>Your classes</h2>
      </div>
      <div className="addAClassSection">
        <button className="addSomething">Add a Class <span>+</span></button>
      </div>
      <div className="classesSection">
        <Cohort />
      </div>
    </section>
    </>
  )
}

