import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

import { getOneListing } from "../../store/listing";
import EditListingModal from "../../components/EditListingModal";



const OneListing = () => {
    const dispatch = useDispatch();
    // const history = useHistory();

    const { id } = useParams();
    // console.log("this is the id!", id)
    const listing = useSelector(state => state.listings[id]);
    // console.log("this is the listing!!", listing)

    useEffect(() => {
        dispatch(getOneListing(id));
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
            <EditListingModal/>
            
        </div>
    )

}


export default OneListing;
