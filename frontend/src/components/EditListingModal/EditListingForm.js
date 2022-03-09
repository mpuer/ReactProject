import React, {useEffect, useState} from "react";
import { useDispatch, useSelector} from "react-redux";
import { useParams } from "react-router-dom";
import { updateListing } from "../../store/listing";


function EditListingForm({setShowModal}) {
    const dispatch = useDispatch();

    const {id} = useParams();
    const listing = useSelector(state => state.listings[id]);

    const sessionUser = useSelector((state) => state.session.user);
    const sessionId = sessionUser.id;

    const [title, setTitle] = useState(listing.title);
    const [address, setAddress] = useState(listing.address);
    const [city, setCity] = useState(listing.city);
    const [state, setState] = useState(listing.state);
    const [country, setCountry] = useState(listing.country);
    const [price, setPrice] = useState(listing.price);
    const [image, setImage] = useState(listing.image);
    const [description, setDescription] = useState(listing.description);
    const [errors, setErrors] = useState([]);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateCity = (e) => setCity(e.target.value);
    const updateState = (e) => setState(e.target.value);
    const updateCountry = (e) => setCountry(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateImage = (e) => setImage(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);


    useEffect(() => {
        let errors = [];
        if (!title) errors.push("Please provide a title!")
        if (!address) errors.push("Please provide an address!")
        if (!city) errors.push("Please provide a city!")
        if (!state) errors.push("Please provide a state!")
        if (!country) errors.push("Please provide a country!")
        if (!price) errors.push("Please provide a price!")
        if (!image) errors.push("Please provide an image url!")
        if (!description) errors.push("Please provide a description!")
        
        setErrors(errors);
    },[title, address, city, state, country, price, image, description]);

    const submitEdit = async (e) => {
        e.preventDefault();

        const listing = {
            id: id,
            sessionId,
            title,
            address,
            city,
            state,
            country,
            price,
            image,
            description
        }

        const listingDispatch = await dispatch(updateListing(listing))
            .catch(async (res) => {
                const data = await res.json();
                if (data && data.errors) return setErrors(data.errors);
            });

            if (listingDispatch) {
                setShowModal(false);
            }
    }

    const cancelEdit = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

    return (
        <div className='edit-form-container'>
            <form onSubmit={submitEdit} className='listing-edit-form'>
                <ul className="errors">
                    {errors.map((error, idx) => <li key={idx}>{error}</li>)}
                </ul>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        Title
                        <input
                            type="text"
                            value={title}
                            onChange={updateTitle}
                            required
                        />
                    </label>
                </div>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        Address
                        <input
                            type="text"
                            value={address}
                            onChange={updateAddress}
                            required
                        />
                    </label>
                </div>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        City
                        <input
                            type="text"
                            value={city}
                            onChange={updateCity}
                            required
                        />
                    </label>
                </div>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        State
                        <input
                            type="text"
                            value={state}
                            onChange={updateState}
                            required
                        />
                    </label>
                </div>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        Country
                        <input
                            type="text"
                            value={country}
                            onChange={updateCountry}
                            required
                        />
                    </label>
                </div>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        Price
                        <input
                            type="text"
                            value={price}
                            onChange={updatePrice}
                            required
                        />
                    </label>
                </div>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        Image
                        <input
                            type="text"
                            value={image}
                            onChange={updateImage}
                            required
                        />
                    </label>
                </div>
                <div className="edit-field-container">
                    <label className='edit-listing-fields'>
                        Description
                        <input
                            type="text"
                            value={description}
                            onChange={updateDescription}
                            required
                        />
                    </label>
                </div>
                <button type="submit">Edit</button>
                <button type="button" onClick={cancelEdit}>Cancel</button>
            </form>
        </div>
    );





}


export default EditListingForm;
