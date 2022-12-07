import SVGUpdate from "./SVGs/SVGUpdate";
import SVGDelete from "./SVGs/SVGDelete";

export default function Assignment({assignment}){
  const showHide = e=>{
    e.currentTarget.parentElement.classList.toggle("expanded")
  }
  return(
    <section className={assignment.gitHubURL ? "assignment" : "assignment missing"}>
      <div className="assignmentHeader" onClick={showHide}>
      <div className="assignmentInfo">
        <p>{assignment.name}</p>
        </div>
        <div className="assignmentLinks">
          <a href={assignment.gitHubURL}>Github</a>&nbsp;|&nbsp;<a href={assignment.deployedURL}>Deployed</a>
          <SVGUpdate />
        </div>
        <div className="assignmentCRUD">
          <SVGUpdate />
          <SVGDelete />
        </div>
        </div>
        {/* <div className="assignment_more">
     
    
          testing
        </div> */}
      
    </section>
  )
}