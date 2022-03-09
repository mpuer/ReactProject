import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getOneListing } from "../../store/listing";
import { removeListing } from "../../store/listing";
import EditListingModal from "../../components/EditListingModal";



const OneListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)

    const { id } = useParams();
    // console.log("this is the id!", id)
    const listingId = parseInt(id)
    const listing = useSelector(state => state.listings[listingId]);
    // console.log("this is the listing!!", listing)
    

    const deleteListing = async (e) => {
        e.preventDefault();

        await dispatch(removeListing(listing))
        .then(history.push("/listings"))
        .catch( async (res) => {
            throw new Error("Unable to delete! this is the component!!")
        })
    }

    useEffect(() => {
        dispatch(getOneListing(listing));
    }, [dispatch, id])

    return (
        <div>
            <h3>{listing.title}</h3>
            <div>{listing.address}</div>
            <div>{listing.city}</div>
            <div>{listing.state}</div>
            <div>{listing.country}</div>
            <div>{listing.price}</div>
            <img alt="" src={`${listing.image}`}></img>
            {(sessionUser.id === listing.userId) &&
            <>
            <EditListingModal/>
            <button type="submit" onClick={deleteListing}>Delete</button>
            </>
            }
            
        </div>
    )

}


export default OneListing;
