import { csrfFetch } from "./csrf";

const LOAD_LISTING = "listings/LOAD";
const SINGLE_LISTING = "listings/SINGLE_LISTING"

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

const initialState = {};

const listingReducer = ( state = initialState, action) => {
    let newState = {};

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

        default:
            return state;
    }
}

export default listingReducer;
