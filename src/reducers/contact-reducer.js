// Handler for fetch contact action, contacts data will be stored in contacts array

const defaultState = {
  contacts: []
}

export default (state=defaultState, action={} ) => {
  switch (action.type) {
    case 'FETCH_CONTACTS_FULFILLED': {
      return {
        ...state,
        contacts: action.payload.data.data || action.payload.data //In case pagination is disabled
      }
    }
  default:
    return state;
  }
}