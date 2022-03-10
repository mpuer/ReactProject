import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { getListings } from "../../store/listing";
import CreateListingModal from "../CreateListingModal";

const ListingViewer = () => {
    const dispatch = useDispatch();
    const sessionUser = useSelector((state) => state.session.user)

    const listings = useSelector(state => state.listings);
    const listingsArr = Object.values(listings);
    
    useEffect(() => {
        dispatch(getListings());
    }, [dispatch, sessionUser]);
    
    if (!sessionUser) {
        alert("Please sign in or create an account to see listings.");
        return <Redirect to="/"/>
    }

    if (!listings) {
        return null;
    }


    return (
        <div className='all-listings-container'>
            <div className='current-listings-container'>
                {listingsArr.map((listing) => {
                    return <div key={listing.id} className="single-listing-container">
                        <Link to={`/listings/${listing.id}`}>{listing.address}</Link>
                        </div>
                })}


            </div>
            {sessionUser &&
            <CreateListingModal/>}
        </div>
    );
};

export default ListingViewer;
