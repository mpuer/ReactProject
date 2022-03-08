import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getListings } from "../../store/listing";

const ListingViewer = () => {
    const dispatch = useDispatch();

    const listings = useSelector(state => state.listings);
    const listingsArr = Object.values(listings);
    

    useEffect(() => {
        dispatch(getListings());
    }, [dispatch]);

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
        </div>
    );
};

export default ListingViewer;
