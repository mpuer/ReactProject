import React, { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

import { createReview } from "../../store/reviews";

function CreateReviewForm({setShowModal}) {
    const dispatch = useDispatch();
    const history = useHistory();

    const {id} = useParams();
    console.log(useParams(), "this is use params!!!!!!!!!!")

    const sessionUser = useSelector((state) => state.session.user);
    const userId = sessionUser.id;

    const [reviewText, setReviewText] = useState("");
    const [rating, setRating] = useState('');
    const [errors, setErrors] = useState([]);

    const updateText = (e) => setReviewText(e.target.value);
    const updateRating = (e) => setRating(e.target.value);


    const submitReview = async (e) => {
        e.preventDefault();
        const review = {
            userId :userId,
            listingId:+id,
            reviewText,
            rating}
        // await dispatch(createReview(review))
        // // history.push(`/listings/${id}`)
        // setShowModal(false)
        // return <Redirect to={`/listings/${id}`}/>


        const newReview = await dispatch(createReview(review))
        .catch(async (res) => {
            const data = await res.json();
            if (data && data.errors) setErrors(data.errors);


    })

    if (newReview) {
        history.push(`/listings/${+id}`)
        setShowModal(false)
    }
            
    }

    const cancelReview = (e) => {
        e.preventDefault();
        setShowModal(false);
    }

    // useEffect(() => {
    //     e.preventDefault();
    //     dispatch
    // })

    return (
        <div className="create-review-container">
            <form onSubmit={submitReview} className="create-review-form">
                <input className="rating"
                type="number"
                placeholder="rating out of 5"
                value={rating}
                onChange={updateRating}
                required
                ></input>
                <input className="reviewText"
                type="textarea"
                placeholder="Your review of this listing!"
                value={reviewText}
                onChange={updateText}
                required
                ></input>
                <button className="create-listing-button" type="submit">CREATE</button>
                <button className="create-listing-button" type="button" onClick={cancelReview}>CANCEL</button>
            </form>
        </div>
    )
}


export default CreateReviewForm;
