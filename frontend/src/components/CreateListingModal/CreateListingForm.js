import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import "./createlisting.css"

import { createListing } from "../../store/listing";

function CreateListingForm({setShowModal}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const [title, setTitle] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [country, setCountry] = useState('');
    const [price, setPrice] = useState();
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateImage = (e) => setImage(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);

    const submitCreate =async (e) => {
        e.preventDefault();
        const listing = {userId,
            title,
            address,
            city,
            state,
            country,
            price,
            image,
            description}

            const newListing = await dispatch(createListing(listing))
                .catch(async (res) => {
                    const data = await res.json();
                    if (data && data.errors) setErrors(data.errors);


            })

            if (newListing) {
                history.push("/listings")
                setShowModal(false)
            }
    }

    const cancelCreate = (e) => {
        e.preventDefault();
        setShowModal(false);
    }


    return (
        <div className='create-form-container'>
            <form onSubmit={submitCreate} className='listing-create-form'>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="create-field-container">
                    <input className="create-listing-input"
                            type="text"
                            placeholder="Title"
                            value={title}
                            onChange={updateTitle}
                            required
                    />
                </div>
                <div className="create-field-container">
                        <input className="create-listing-input"
                            type="text"
                            placeholder="Address"

                            value={address}
                            onChange={updateAddress}
                            required
                        />
                   
                </div>
                <div className="create-field-container">
                        <input className="create-listing-input"
                            type="text"
                            placeholder="City"
                            value={city}
                            onChange={updateCity}
                            required
                        />
                   
                </div>
                <div className="create-field-container">
                        <input className="create-listing-input"
                            type="text"
                            placeholder="State or Province"
                            value={state}
                            onChange={updateState}
                            required
                        />
                    
                </div>
                <div className="create-field-container">
                        <input className="create-listing-input"
                            type="text"
                            value={country}
                            placeholder="Country"
                            onChange={updateCountry}
                            required
                        />
                    
                </div>
                <div className="create-field-container">
                        <input className="create-listing-input"
                            type="number"
                            placeholder="Nightly rate"
                            value={price}
                            onChange={updatePrice}
                            required
                        />
                    
                </div>
                <div className="create-field-container">
                        <input className="create-listing-input"
                            type="text"
                            placeholder="Image Url"
                            value={image}
                            onChange={updateImage}
                            required
                        />
                    
                </div>
                <div className="create-field-container">
                    <input className="create-listing-desc"
                            type="textarea"
                            placeholder="Description of your listing!"
                            value={description}
                            onChange={updateDescription}
                            required
                        />
                    
                </div>
                <button className="create-listing-button" type="submit">CREATE</button>
                <button className="create-listing-button" type="button" onClick={cancelCreate}>CANCEL</button>
            </form>
        </div>
    );




}

export default CreateListingForm;
