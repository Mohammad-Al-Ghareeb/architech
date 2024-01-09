import request from "../../utils/request";
import { settingsActions } from "../slices/settingsSlice";
import { toast } from "react-toastify";

export function getSettings(setWhoValue, setPrivacyValue) {
  return async (dispatch) => {
    try {
      const { data } = await request.get("/Setting/GetAllSettings");
      dispatch(settingsActions.setWho(data[1].aboutUs));
      setWhoValue(data[1].aboutUs);
      dispatch(settingsActions.setPrivacy(data[1].privacy));
      setPrivacyValue(data[1].privacy);
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateSettings(user) {
  return async (dispatch) => {
    try {
      dispatch(settingsActions.setLoading());
      await request.put(
        `/Setting/UpdateSetting/?id=1c069054-3509-4ba9-1dd2-08dc0797ce96`,
        user
      );

      toast.success("تم حفظ التغيرات");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(settingsActions.setLoading());
    }
  };
}
