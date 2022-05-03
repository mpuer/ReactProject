import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import "./singlelisting.css"
import { getOneListing } from "../../store/listing";
import { removeListing } from "../../store/listing";
import { loadReviews } from "../../store/reviews";
import { removeReview } from "../../store/reviews";
import EditListingModal from "../../components/EditListingModal";
import CreateReviewModal from "../../components/CreateReviewModal";


const API_KEY = process.env.REACT_APP_MAPS_API_KEY


const OneListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)

    

    const { id } = useParams();
    // console.log("this is the id!", id)
    // const listingId = parseInt(id)
    // console.log("this is the id", id)

    const listing = useSelector(state => state.listings[id]);
    // console.log("this is the listing!!", listing)
    const reviews = useSelector(state => state?.reviews);
    

    const reviewsArr = Object.values(reviews)
    const listingReviews = reviewsArr?.filter(review => review?.listingId === +id)
    // console.log(listingReviews, "this is the listing reviews")

    // const notMyPost = (sessionUser?.id !== listing?.userId);
    // const noReviewYet = (!listingReviews?.find(review => review.userId !== sessionUser.id));
    // const postReview = (notMyPost && noReviewYet);
    
    const deleteListing = async (e) => {
        e.preventDefault();
        
        await dispatch(removeListing(listing))
        .then(history.push("/"))
        .catch( async (res) => {
            throw new Error("Unable to delete! this is the component!!")
        })
    }

    const deleteReview = async (e) => {
        e.preventDefault();
        const myReview = listingReviews.find(review => review?.userId === sessionUser.id)
        let review = dispatch(removeReview(myReview.id))
        if (review) {
            review = false;
            dispatch(loadReviews());
        }
    }
    
    useEffect(() => {
        // console.log("this is the listing", listing)
        dispatch(getOneListing(id));
    }, [dispatch, id])
    
    useEffect(() => {
        dispatch(loadReviews());
    }, [dispatch])
    


    // if (!sessionUser) {
    //    return history.push("/")
    // }

    return (
        <div>
            <div className="current-listing-container">
                <h3>{listing?.title}</h3>
                <img className="single-listing-image" alt="" src={`${listing?.image}`}></img>
                <img alt=''
                    className='google-map'
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=${listing?.address},${listing?.city}},${listing?.state}&zoom=13&size=600x300&maptype=roadmap&markers=color:red%7C${listing?.address},${listing?.city},${listing?.state}&key=${API_KEY}`}>
                </img>
                <div className="single-listing-address-details">
                    <div className="single-listing-individual-fields">
                        <div>Street address: </div> 
                        <div className="single-listing-values">{listing?.address}</div>
                    </div>
                    <div className="single-listing-individual-fields">
                        <div>City or town: </div>
                        <div className="single-listing-values">{listing?.city}</div>
                    </div>
                    <div className="single-listing-individual-fields">
                        <div>State or province: </div>
                        <div className="single-listing-values">{listing?.state}</div>
                    </div>
                    <div className="single-listing-individual-fields">
                        <div>Country: </div>
                    <   div className="single-listing-values">{listing?.country}</div>
                    </div>
                    <div className="single-listing-individual-fields">
                        <div>Nightly rate: </div>
                        <div className="single-listing-values">${listing?.price}</div>

                    </div>
                    <div className="single-listing-individual-fields">
                        <div className="listing-description">{listing?.description}</div>
                    </div>
                </div>
                {(sessionUser.id === listing?.userId) &&
                <>
                <EditListingModal/>
                <button type="submit" className="create-listing-button" onClick={deleteListing}>Delete</button>
                </>
                }
            </div>
            <div className="reviews-container">
                {listingReviews.map((review) => {
                    return <div key={review.id} className="single-review-container">
                        <div className="user-and-rating">
                            <div className="review-username">Guest #{review.userId}</div>
                            <div className="user-rating">Rating: {review.rating}/5</div>
                        </div>
                    
                        <div className="user-reviewText">{review.reviewText}</div>
                        {(review.userId === sessionUser.id) &&
                        <form onSubmit={deleteReview}>
                        <button type="submit" className="create-listing-button">Delete Review</button>
                        </form>
                        }
                    </div>
                })}
                {(!(listingReviews.find(review => review?.userId === sessionUser.id)) && !(listing?.userId === sessionUser.id)) &&
                <CreateReviewModal/>}
            </div>   
        </div>
    )

}


export default OneListing;
