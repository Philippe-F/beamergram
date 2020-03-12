import React from "react";
import { connect } from "react-redux";
import { closeModal } from "../actions/modal_actions";
import CreatePostFormContainer from "./posts/create_post_form_container";

const Modal = (modal, closeModal) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case "newUpload":
      component = <CreatePostFormContainer/>;
      break;
    default:
      return null;
  };



  return (
    <div className="modal" onClick={closeModal}>
      <div classname="modal-child" onClick={(e) => e.preventDefault()}>
        {component} 
      </div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  modal: state.modal,
})

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
})


export default connect(mapStateToProps, mapDispatchToProps)(Modal);