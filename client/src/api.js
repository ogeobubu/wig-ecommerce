import axios from "axios";
const MAIN_URL = "http://localhost:5000/api/";
const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzI0YjQ5MWYyZTMyM2IyNzMzYjVjOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzNTQzODA0NSwiZXhwIjoxNjM1NTI0NDQ1fQ.hJOCk4ws9UgmvHaRZGOnUCOnoudgm451afKW9nrS9u4";

export const publicUse = axios.create({
  baseURL: MAIN_URL,
});

export const privateUse = axios.create({
  baseURL: MAIN_URL,
  header: {
    Authoziration: token,
  },
});
