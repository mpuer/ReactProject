import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useHistory, Redirect } from "react-router-dom";
import "./singlelisting.css"
import { getOneListing } from "../../store/listing";
import { removeListing } from "../../store/listing";
import EditListingModal from "../../components/EditListingModal";



const OneListing = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const sessionUser = useSelector(state => state.session.user)

    const { id } = useParams();
    // console.log("this is the id!", id)
    // const listingId = parseInt(id)
    console.log("this is the id", id)
    const listing = useSelector(state => state.listings[id]);
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
        console.log("this is the listing", listing)
        dispatch(getOneListing(id));
    }, [dispatch])

    if (!sessionUser) {
        alert("Please sign in or create an account to see listings.");
        return <Redirect to="/"/>
    }

    return (
        <div>
            <div className="current-listing-container">
                <h3>{listing?.title}</h3>
                <img className="single-listing-image" alt="" src={`${listing?.image}`}></img>
                <div className="single-listing-address-details">
                    <div className="single-listing-individual-fields">
                        <div>Street address:</div> 
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
        </div>
    )

}


export default OneListing;
