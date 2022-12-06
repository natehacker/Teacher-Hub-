import SVGUpdate from "./SVGs/SVGUpdate";
import SVGDelete from "./SVGs/SVGDelete";

export default function Assignment(){
  const showHide = e=>{
    e.currentTarget.parentElement.classList.toggle("expanded")
  }
  return(
    <section className="assignment">
      <div className="assignmentHeader" onClick={showHide}>
      <div className="assignmentInfo">
        <p>Assignment</p>
        </div>
        <div className="assignmentLinks">
          <a href="#">Github</a>&nbsp;|&nbsp;<a href="#">Deployed</a>
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