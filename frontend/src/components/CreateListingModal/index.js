import React, {useState} from "react";
import { Modal } from "../../context/Modal";
import CreateListingForm from "./CreateListingForm";

function CreateListingModal() {
    const [showModal, setShowModal] = useState(false);


    return (
        <>
          <button onClick={() => setShowModal(true)}>Create a listing!</button>
          {showModal && (
            <Modal onClose={() => setShowModal(false)}>
              <CreateListingForm setShowModal={setShowModal}/>
            </Modal>
          )}
        </>
      );
}


export default CreateListingModal;
