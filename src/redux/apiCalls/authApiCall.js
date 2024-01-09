import { loginRequest } from "../../utils/request";
import { authActions } from "../slices/authSlice";
import { toast } from "react-toastify";

export function loginUser(user) {
  return async (dispatch) => {
    try {
      dispatch(authActions.loading());
      const { data } = await loginRequest.post("Login", user);

      dispatch(authActions.login(data));
      localStorage.setItem("userInfo", JSON.stringify(data));
      dispatch(authActions.loading());
      toast.success("Loged successfully");
    } catch (error) {
      toast.error(error.response.data);
      dispatch(authActions.loading());
      console.log(error.response.data);
    }
  };
}
