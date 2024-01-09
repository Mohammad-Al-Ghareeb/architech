import { toast } from "react-toastify";
import request from "../../utils/request";
import { chatActions } from "../slices/chatSlice";

export function getChats(currentPage, chatPerPage) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Contact/GetContact?Page=${currentPage}&PerPage=${chatPerPage}`
      );
      dispatch(chatActions.setChats(data.items));
      dispatch(chatActions.setNumberOfChats(data.totalCount));
    } catch (error) {
      //   toast.error(error.response.data.message);
      console.log(error);
    }
  };
}

export function deleteChats(userId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    try {
      await request.delete(`/Contact/DeleteContact?id=${userId}`);
      dispatch(chatActions.removeChat(userId));
      toast.success("تم حذف المحادثة...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getChats(x, 3));
    }
  };
}
