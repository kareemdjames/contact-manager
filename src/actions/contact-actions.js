import { client } from './';

const url = '/contacts'
export function fetchContacts() {
  // fetch data from backend
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: client.get(url)
    })
  }
}