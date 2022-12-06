export default function Modal(props){
  const closeModal = (e)=>{
      
      console.log(e.target.classList)
     let elementName= e.target.classList;
     if(elementName.contains("modal")){
      props.changeModalState()
     }
  }


  return(
   
    <section onClick={closeModal} className={props.modalShow ? "modal showModal" : "modal hideModal"}>
      {props.children}
    </section>
  )
}