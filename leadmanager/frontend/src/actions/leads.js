// this where we make http request
import axios from "axios";

// GET LEADS
import { GET_LEADS } from "./types";

export const getLeads = () => (dispatch) => {
  axios
    .get("/pai/leads/")
    .then((res) => {
      dispatch({
        type: GET_LEADS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
