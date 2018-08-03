import axios from 'axios';

//Connecting to backend server
export const client = axios.create({
  baseURL: "http://localhost:3030",
  headers: {
    "Content-Type": "application/json"
  }
})
