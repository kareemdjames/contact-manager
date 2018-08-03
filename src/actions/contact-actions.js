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

//Provides a new contact object to the Redux form/
export function newContact() {
  return dispatch => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

//Post contact data to the api server
export function saveContact(contact) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      payload: client.post(url, contact)
    })
  }
}

//Fetch a single contact
export function fetchContact(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CONTACT',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

//Updating contact
export function updateContact(contact) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CONTACT',
      payload: client.put(`${url}/${contact._id}`, contact)
    })
  }
}

//Delete contact
export function deleteContact(_id) {
  return dispatch => {
    return dispatch({
      type: 'DELETE_CONTACT',
      payload: client.delete(`${url}/${_id}`)
    })
  }
}