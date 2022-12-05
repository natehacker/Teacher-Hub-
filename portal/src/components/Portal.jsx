import "../Portal.css"
import Cohort from "./elements/Cohort"
import Modal from "./elements/Modal"
import AddClassForm from "./Forms/AddClassForm"
import {useState} from "react";

export default function Portal({user, authenticated}){
  console.log(user)
  const [modalShow, setModalShow] = useState(false)
  const changeModalState = ()=>{
    setModalShow(!modalShow)
  }
  const handleModalFormClick = (e)=>e.stopPropagation();
  return (user && authenticated) ? (
    <>
    <section className="portal">
      <div className="sectionHeader">
      <h2>Your classes</h2>
      </div>
      <div className="addAClassSection">
        <button className="addSomething" onClick={changeModalState}>Add a Class <span>+</span></button>
      </div>
      <div className="classesSection">
        <Cohort handleModalFormClick={handleModalFormClick}/>
      </div>
    </section>
    <Modal modalShow={modalShow} setModalShow={setModalShow} changeModalState={changeModalState}>
      <AddClassForm onClick={handleModalFormClick}/>
    </Modal>
    </>
  ) : (
    <div className="protected">
      <h3>Oops! You must be signed in to do that!</h3>
      
    </div>
  )
}

