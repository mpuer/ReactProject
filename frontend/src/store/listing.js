import { csrfFetch } from "./csrf";

const LOAD_LISTING = "listings/LOAD";
const SINGLE_LISTING = "listings/SINGLE_LISTING";
const UPDATE_LISTING = "listings/UPDATE";
const REMOVE_LISTING = "listings/REMOVE";
const CREATE_LISTING = "listings/CREATE";


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

const remove = (listing) => {
    return {
        type: REMOVE_LISTING,
        listing
    }
}

const create = (listing) => {
    return {
        type: CREATE_LISTING,
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
        return place;
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

export const removeListing = (listing) => async (dispatch) => {
    const response = await csrfFetch(`/api/listings/${listing.id}`, {
        method: "DELETE",
        // body: JSON.stringify({listing})
    })

    if (response.ok) {
        const listing = await response.json();
        dispatch(remove(listing));
        // return listing;
    }
}

export const createListing = (listing) =>  async (dispatch) => {
    const response = await csrfFetch("/api/listings", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(listing)
    })

    if (response.ok) {
        const addListing = await response.json();
        dispatch(create(addListing));
        return addListing;

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
            const newState = {
                ...state,
                [action.listing.id]: action.listing
            };
            return newState;
        };
        case REMOVE_LISTING: {
            let newState = {...state};
            delete newState[action.listing.id]
            return newState
        }
        case CREATE_LISTING: {
            const newState = {...state};
            newState[action.listing.id] = action.listing;
            return newState;
        }

        default:
            return state;
    }
}

export default listingReducer;
