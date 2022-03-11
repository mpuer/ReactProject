import React, {useState, } from "react";
import { Modal } from "../../context/Modal";
import CreateReviewForm from "./CreateReviewForm";
import {NavLink, Route} from "react-router-dom";

function CreateReviewModal() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
          <NavLink to={`listings/${id}/`}> 
          <button className="listing-new-button" onClick={() => setShowModal(true)}>POST A REVIEW!</button>
          </NavLink>
          {showModal && (
          <Route path="listings/:id/">
                <Modal onClose={() => setShowModal(false)}>
              <CreateReviewForm setShowModal={setShowModal}/>
              </Modal>
            
            </Route>
            )}
        </>
      );
}


export default CreateReviewModal;
