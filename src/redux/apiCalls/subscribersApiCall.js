import { toast } from "react-toastify";
import request from "../../utils/request";
import { subscribersAction } from "../slices/subscribersSlice";

export function getSubscribers(currentPage, subscriberPerPage) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Subscriber/GetAllSubscriber?Page=${currentPage}&PerPage=${subscriberPerPage}`
      );
      dispatch(subscribersAction.setSubscribers(data.items));
      dispatch(subscribersAction.setNumberOfSubscribers(data.totalCount));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteSubscribers(userId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    const user = {
      userName: userId.userName,
      code: userId.code,
    };
    try {
      await request.delete(`/Subscriber/DeleteSubscriber`, user);
      //   dispatch(subscribersAction.removeSubscriber(userId));
      toast.success("تم حذف المشترك...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getSubscribers(x, 7));
      console.log(userId);
    }
  };
}

export function addCode(Code) {
  return async (dispatch) => {
    try {
      dispatch(subscribersAction.setLoading());
      await request.post(`/Admin/AddQrCode`, Code);
      toast.success("تم اضافة الكود");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data);
    } finally {
      dispatch(subscribersAction.setLoading());
    }
  };
}

export function getCode() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/Admin/GetAllCodes`);
      dispatch(subscribersAction.setCodes(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addUserToCourse(sub, currentPage, setCurrentPage) {
  return async (dispatch) => {
    const subs = {
      userName: sub.userName,
      code: sub.code,
    };
    try {
      dispatch(subscribersAction.setLoading());
      await request.post(
        `/Admin/AddUserToCourse?courseName=${sub.courseName}`,
        subs
      );
      toast.success("تم اضافة المشترك");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getSubscribers(x, 7));
      dispatch(subscribersAction.setLoading());
    }
  };
}
