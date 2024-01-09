import { toast } from "react-toastify";
import request from "../../utils/request";
import { centersActions } from "../slices/centersSlice";

export function getCenters(currentPage, appUserPerPage) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Center/AllCenterPagination?Page=${currentPage}&PerPage=${appUserPerPage}`
      );
      dispatch(centersActions.setCenters(data.items));
      dispatch(centersActions.setNumberOfCenters(data.totalCount));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteCenter(centerId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    try {
      await request.delete(`/Center/DeleteCenter?id=${centerId}`);
      dispatch(centersActions.removeCenter(centerId));
      toast.success("تم حذف المركز...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getCenters(x, 7));
    }
  };
}

export function addCenter(newCenter, currentPage, centerPerPage) {
  return async (dispatch) => {
    try {
      dispatch(centersActions.setLoading());
      await request.post(`/Center/AddCenter`, newCenter);
      toast.success("تم اضافة مركز جديد...");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    } finally {
      dispatch(getCenters(currentPage, centerPerPage));
      dispatch(centersActions.setLoading());
    }
  };
}
