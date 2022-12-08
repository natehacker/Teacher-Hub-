
import Cohort from "./elements/Cohort";
import Modal from "./elements/Modal";
import AddClassForm from "./Forms/AddClassForm";
import { useState, useEffect } from "react";
import { GetCohorts } from "../services/CohortServices";

export default function Portal({ user, authenticated }) {
  const [renderState, setRenderState] = useState(false)
  const [modalShow, setModalShow] = useState(false);
  const changeModalState = () => {
    setModalShow(!modalShow);
  };
  const handleModalFormClick = (e) => e.stopPropagation();

  const [cohorts, setCohorts] = useState([]);

  useEffect(() => {
    if (user && authenticated) {
      const handleCohorts = async (userId) => {
        const data = await GetCohorts(userId);
        setCohorts(data);
      };
      handleCohorts(user.id);
    }
  },[user,authenticated]);


  return user && authenticated ? (
    <>
      <section className="portal">
        <div className="sectionHeader">
          <h2>Your classes</h2>
        </div>
        <div className="addAClassSection">
          <button className="addSomething" onClick={changeModalState}>
            Add a Class <span>+</span>
          </button>
        </div>
        <div className="classesSection">
          {cohorts.length ? (
            cohorts.map((elem) => (
              <Cohort
                key={elem.id}
                cohortId={elem.id}
                cohortName={elem.name}
                user={user}
                handleModalFormClick={handleModalFormClick}
                changeModalState={changeModalState}
                setRenderState={setRenderState}
                renderState={renderState}
                setCohorts={setCohorts}
              />
            ))
          ) : (
            <p className="noClasses">You don't currently have any classes</p>
          )}
        </div>
      </section>
      <Modal
        modalShow={modalShow}
        setModalShow={setModalShow}
        changeModalState={changeModalState}
      >
        <AddClassForm user={user} authenticated={authenticated} cohorts={cohorts} setCohorts={setCohorts} onClick={handleModalFormClick} changeModalState={changeModalState} />
      </Modal>
    </>
  ) : (


<section className="portal">
<div className="sectionHeader">
  <h2>Oops!</h2>
</div>

<div className="classesSection">
 <p className="protectedRoute">You need to be signed in to access this portal.
 </p>

</div>
</section>
  );
}