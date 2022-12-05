import "../Portal.css"
import Cohort from "./elements/Cohort"
import Modal from "./elements/Modal"
import AddClassForm from "./Forms/AddClassForm"
import {useState, useEffect} from "react";
import { GetCohorts } from "../services/CohortServices";

export default function Portal({user, authenticated}){
  console.log(user)
  const [modalShow, setModalShow] = useState(false)
  const changeModalState = ()=>{
    setModalShow(!modalShow)
  }
  const handleModalFormClick = (e)=>e.stopPropagation();

  const [cohorts, setCohorts] = useState(null)
  
  useEffect(() => {
    const handleCohorts = async (userId) => {
      const data = await GetCohorts(userId)
      console.log(data)
      setCohorts(data)
    }
    handleCohorts(user.id)
  }, [])

  console.log(user.id)
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
        {
          cohorts ? cohorts.map(
            elem => (<Cohort cohortId={elem.id}
                            cohortName={elem.name}
                            user={user}
                            handleModalFormClick={handleModalFormClick}
                            />)
          ) : (
            <p>You don't currently have any classes</p>
          )
        }
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

