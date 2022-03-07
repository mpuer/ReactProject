const LOAD_LISTING = "listings/LOAD"

const load = (places) => {
    return {
        type: LOAD_LISTING,
        places
    }
}

export const getListings = () => async (dispatch) => {
    const response = await fetch(`/api/listings`);
  if (response.ok) {
    const places = await response.json();
    // console.log(list);
    dispatch(load(places));
    return places;
  }
};

const initialState = {};

const listingReducer = ( state = initialState, action) => {
    let newState;

    switch (action.type) {
        case LOAD_LISTING: {
            newState = {...state}
            action.places.forEach(place => {
                newState[place.id] = place;
            });

            return newState;
        }

        default:
            return state;
    }
}

export default listingReducer;
