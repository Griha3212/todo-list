import axios from "axios";
import {
  GET_USERS_STARTED,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from "../types";

export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USERS_STARTED,
    });
    const res = await axios.get(
      `http://localhost:3005/api/user/get_user/607d500412cf7a1614eb7f16`
    );
    dispatch({
      type: GET_USERS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_USERS_ERROR,
      payload: error,
    });
  }
};

// export const loginUser = (data) => async (dispatch) => {
//   try {
//     dispatch({
//       type: GET_USERS_STARTED,
//     });
//     const res = await axios.post(`http://localhost:3005/api/user/login`, {
//       ...data,
//     });
//     dispatch({
//       type: GET_USERS_SUCCESS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: GET_USERS_ERROR,
//       payload: error,
//     });
//   }
// };
