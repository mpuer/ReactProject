import React, {useState, } from "react";
import { Modal } from "../../context/Modal";
import CreateReviewForm from "./CreateReviewForm";
import {NavLink, Route} from "react-router-dom";

function CreateReviewModal() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
          <button className="listing-new-button" onClick={() => setShowModal(true)}>POST A REVIEW!</button>
          {showModal && (
                <Modal onClose={() => setShowModal(false)}>
              <CreateReviewForm setShowModal={setShowModal}/>
              </Modal>
            )}
        </>
      );
}


export default CreateReviewModal;
