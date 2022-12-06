import SVGUpdate from "./SVGs/SVGUpdate";
import SVGDelete from "./SVGs/SVGDelete";

export default function Assignment(){
  return(
    <section className="assignment">
      <div>
      <div className="studentInfo">
        <h4>Assignment</h4>
        </div>
        <div className="studentCRUD">
          <SVGUpdate />
          <SVGDelete />
        </div>
      </div>
    </section>
  )
}