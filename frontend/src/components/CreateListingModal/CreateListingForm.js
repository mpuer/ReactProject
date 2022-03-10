import React, { useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

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
    const [country, setCountry] = useState('listing.country');
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
                    <label className='create-listing-fields'>
                        Title
                        <input
                            type="text"
                            value={title}
                            onChange={updateTitle}
                            required
                        />
                    </label>
                </div>
                <div className="create-field-container">
                    <label className='create-listing-fields'>
                        Address
                        <input
                            type="text"
                            value={address}
                            onChange={updateAddress}
                            required
                        />
                    </label>
                </div>
                <div className="create-field-container">
                    <label className='create-listing-fields'>
                        City
                        <input
                            type="text"
                            value={city}
                            onChange={updateCity}
                            required
                        />
                    </label>
                </div>
                <div className="create-field-container">
                    <label className='create-listing-fields'>
                        State
                        <input
                            type="text"
                            value={state}
                            onChange={updateState}
                            required
                        />
                    </label>
                </div>
                <div className="create-field-container">
                    <label className='create-listing-fields'>
                        Country
                        <input
                            type="text"
                            value={country}
                            onChange={updateCountry}
                            required
                        />
                    </label>
                </div>
                <div className="create-field-container">
                    <label className='create-listing-fields'>
                        Price
                        <input
                            type="number"
                            value={price}
                            onChange={updatePrice}
                            required
                        />
                    </label>
                </div>
                <div className="create-field-container">
                    <label className='create-listing-fields'>
                        Image
                        <input
                            type="text"
                            value={image}
                            onChange={updateImage}
                            required
                        />
                    </label>
                </div>
                <div className="create-field-container">
                    <label className='create-listing-fields'>
                        Description
                        <input
                            type="text"
                            value={description}
                            onChange={updateDescription}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Create</button>
                <button type="button" onClick={cancelCreate}>Cancel</button>
            </form>
        </div>
    );




}

export default CreateListingForm;
