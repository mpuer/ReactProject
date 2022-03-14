import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getListings } from "../../store/listing";
import CreateListingModal from "../CreateListingModal";
import "./listings.css"

const ListingViewer = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)

    const listings = useSelector(state => state.listings);
    const listingsArr = Object.values(listings);
    
    useEffect(() => {
        dispatch(getListings());
    }, [dispatch, sessionUser]);
    
    if (!sessionUser) {
        return <Redirect to="/"/>
    }

    if (!listings) {
        return null;
    }


    return (
        
        <div className='all-listings-container'>
            {sessionUser &&
            <CreateListingModal/>}
            <div className='current-listings-container'>
                {listingsArr.map((listing) => {
                    return <div key={listing.id} className="single-listing-container">
                        <Link to={`/listings/${listing.id}`}>
                            <div className="image-container">
                                <img className="listing-image" src={`${listing.image}`}/>
                            </div>
                            <div className="single-listing-details">
                                <div className="listing-title">{listing.title}</div>
                                {(listing.userId === sessionUser.id) &&
                                <div className="my-listing">*your listing*</div>}
                                <div className="citycountry-and-price">
                                    <div className="city-country">{listing.city}, {listing.country}</div>
                                    <div className="price">${listing.price}/Night</div>
                                </div>
                            </div>
                        
                        
                            
                        </Link>
                        </div>
                })}


            </div>
        </div>
            
    );
};

export default ListingViewer;
