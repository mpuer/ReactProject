import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import CreateListingForm from "./CreateListingForm";

function CreateListingModal() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
          <button className="listing-new-button" onClick={() => setShowModal(true)}>CREATE A LISTING</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateListingForm setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}


export default CreateListingModal;
