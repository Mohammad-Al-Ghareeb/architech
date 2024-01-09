import { toast } from "react-toastify";
import request from "../../utils/request";
import { dashUserActions } from "../slices/dashUserSlice";

export function getDashUsers(currentPage, dashUserPerPage) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Admin/GetAllAdmin?Page=${currentPage}&PerPage=${dashUserPerPage}`
      );
      dispatch(dashUserActions.setDashUsers(data.items));
      dispatch(dashUserActions.setNumberOfDashUsers(data.totalCount));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteDashUsers(userId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    try {
      await request.delete(`/Admin/DeleteUser?id=${userId}`);
      dispatch(dashUserActions.removeDashUser(userId));
      toast.success("تم حذف الادمن...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getDashUsers(x, 7));
    }
  };
}

export function addDashUser(newAdmin, currentPage, dashUserPerPage) {
  return async (dispatch) => {
    try {
      dispatch(dashUserActions.setLoading());
      await request.post(`/Admin/CreateAdmin`, newAdmin);
      toast.success("تم اضافة أدمن جديد...");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    } finally {
      dispatch(getDashUsers(currentPage, dashUserPerPage));
      dispatch(dashUserActions.setLoading());
    }
  };
}
