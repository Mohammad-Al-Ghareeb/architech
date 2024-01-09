import { toast } from "react-toastify";
import request from "../../utils/request";
import { appUserAction } from "../slices/appUsersSlice";

export function getAppUsers(currentPage, appUserPerPage) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Admin/AllUsers?Page=${currentPage}&PerPage=${appUserPerPage}`
      );
      dispatch(appUserAction.setAppUsers(data.items));
      dispatch(appUserAction.setNumberOfAppUsers(data.totalCount));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteAppUsers(userId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    try {
      await request.delete(`/Admin/DeleteUser?id=${userId}`);
      dispatch(appUserAction.removeAppUser(userId));
      toast.success("تم حذف المستخدم...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getAppUsers(x, 7));
    }
  };
}

export function addAppUser(newAdmin, currentPage, appUserPerPage) {
  return async (dispatch) => {
    try {
      dispatch(appUserAction.setLoading());
      await request.post(`/Admin/AddUser`, newAdmin);
      toast.success("تم اضافة مستخدم جديد...");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    } finally {
      dispatch(getAppUsers(currentPage, appUserPerPage));
      dispatch(appUserAction.setLoading());
    }
  };
}
