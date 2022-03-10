import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import EditListingForm from "./EditListingForm";

function EditListingModal() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
          <button className="create-listing-button" onClick={() => setShowModal(true)}>Edit Your Listing</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <EditListingForm setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}


export default EditListingModal;
