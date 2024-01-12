import { toast } from "react-toastify";
import request from "../../utils/request";
import { coursesAction } from "../slices/coursesSlice";

export function getCourses(currentPage, appUserPerPage) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Course/GetCoursePagination?Page=${currentPage}&PerPage=${appUserPerPage}`
      );
      dispatch(coursesAction.setCourses(data.items));
      dispatch(coursesAction.setNumberOfCourses(data.totalCount));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getCourseVideos(courseId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Video/GetVideosByCourseIdForAdmin?courseId=${courseId}`
      );
      dispatch(coursesAction.setCourseVideos(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function addCourse(courseData, currentPage, coursePerPage) {
  return async (dispatch) => {
    try {
      dispatch(coursesAction.setLoading());
      await request.post(`/Course/AddCourse`, courseData);
      toast.success("تم اضافة كورس جديد");
    } catch (error) {
      toast.error(error.response.data);
      console.log(error);
    } finally {
      dispatch(getCourses(currentPage, coursePerPage));
      dispatch(coursesAction.setLoading());
    }
  };
}

export function deleteCourse(courseId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    try {
      dispatch(coursesAction.setLoading());
      await request.delete(`/Course/DeleteCourseById?id=${courseId}`);
      dispatch(coursesAction.removeCourse(courseId));
      toast.success("تم حذف الكورس...");
    } catch (error) {
      console.log(error);
    } finally {
      let x = currentPage;
      dispatch(coursesAction.setLoading());
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getCourses(x, 3));
    }
  };
}