import { Contacts } from '../contact-data';

export function fetchContacts() {
  // fetch data from contacts-data.js
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: contacts
    })
  }
}