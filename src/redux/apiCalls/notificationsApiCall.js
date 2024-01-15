import { toast } from "react-toastify";
import request from "../../utils/request";
import { notificationsAction } from "../slices/notificationsSlice";

export function getNotifications(currentPage, notificationPerPage) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Admin/AllNotification?page=${currentPage}&perPage=${notificationPerPage}`
      );
      dispatch(notificationsAction.setNotifications(data.items));
      dispatch(notificationsAction.setNumberOfNotifications(data.totalCount));
    } catch (error) {
      //   toast.error(error.response.data.message);
      console.log(error);
    }
  };
}

export function deleteNotifications(userId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    try {
      await request.delete(`/Admin/DeleteNotification?id=${userId}`);
      dispatch(notificationsAction.removeNotifications(userId));
      toast.success("تم حذف الرسالة...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getNotifications(x, 3));
    }
  };
}

export function addNotification(
  userId,
  currentPage,
  setCurrentPage,
  bearerToken
) {
  return async (dispatch) => {
    try {
      dispatch(notificationsAction.setLoading());
      await request.post(`/Admin/CreateNotification`, userId, {
        headers: {
          Authorization: `Bearer ${bearerToken}`,
          "Content-Type": "application/json",
        },
      });

      toast.success("تم ارسال الاشعار...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getNotifications(x, 3));
      dispatch(notificationsAction.setLoading());
    }
  };
}
