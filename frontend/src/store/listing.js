import { csrfFetch } from "./csrf";

const LOAD_LISTING = "listings/LOAD";
const SINGLE_LISTING = "listings/SINGLE_LISTING";
const UPDATE_LISTING = "listings/UPDATE";


const load = (places) => {
    return {
        type: LOAD_LISTING,
        places
    }
}

const oneListing = (place) => {
    return {
        type: SINGLE_LISTING,
        place
    }
}

const update = (listing) => {
    return {
        type: UPDATE_LISTING,
        listing
    }
}

export const getListings = () => async (dispatch) => {
    const response = await csrfFetch(`/api/listings`);
  if (response.ok) {
    const places = await response.json();
    // console.log(list);
    dispatch(load(places));
    return places;
  }
};

export const getOneListing = (id) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${id}`)

    if (response.ok) {
        const place = await response.json()
        dispatch(oneListing(place));
    }
}

export const updateListing = (listing) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listing.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(listing)
    });

    if (response.ok) {
        const updated = await response.json();
        dispatch(update(updated));
        return updated;
    }
}

const initialState = {};

const listingReducer = ( state = initialState, action) => {
    let newState = {...state};

    switch (action.type) {
        case LOAD_LISTING: {
            // newState = {...state}
            action.places.forEach((place) => {
                newState[place.id] = place;
            });

            return newState;
        }
        case SINGLE_LISTING: {
            const newState = {
                ...state,
                [action.place.id]: action.place}
            return newState;
        }
        case UPDATE_LISTING: {
            return {
                ...state,
                [action.listing.id]: action.listing
            };
        };

        default:
            return state;
    }
}

export default listingReducer;
