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

export function getAllCourses() {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/Course/GetAllCourses`);
      dispatch(coursesAction.setAllCourse(data));
    } catch (error) {
      console.log(error);
    }
  };
}

export function getOneCourse(id) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(`/Course/GetCourseById?id=${id}`);

      dispatch(coursesAction.setHelperName(data.courseName));
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

export function addVideo(videoData, id) {
  return async (dispatch) => {
    try {
      dispatch(coursesAction.setLoading());
      await request.post(`/Video/CreateVideo`, videoData);
      toast.success("تم اضافة فيديو جديد");
    } catch (error) {
      toast.error(error.response.data.errors);
      console.log(error);
    } finally {
      dispatch(getCourseVideos(id));
      dispatch(coursesAction.setLoading());
    }
  };
}

export function deleteCourse(courseId, currentPage, setCurrentPage) {
  return async (dispatch) => {
    try {
      dispatch(coursesAction.setDeleteLoading());
      await request.delete(`/Course/DeleteCourseById?id=${courseId}`);
      dispatch(coursesAction.removeCourse(courseId));
      toast.success("تم حذف الكورس...");
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(coursesAction.setDeleteLoading());
      let x = currentPage;
      if (currentPage !== 1) x = currentPage - 1;
      setCurrentPage(x);
      dispatch(getCourses(x, 3));
    }
  };
}

export function deleteVideo(videoId, courseId) {
  return async (dispatch) => {
    try {
      dispatch(coursesAction.setDeleteLoading());
      await request.delete(`/Video/DeleteVideo?videoId=${videoId}`);
      toast.success("تم حذف الفيديو...");
      dispatch(coursesAction.removeVideoData());
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(getCourseVideos(courseId));
      dispatch(coursesAction.removeVideoAttachment());
      dispatch(coursesAction.setDeleteLoading());
    }
  };
}

export function addAttachment(attachmentData, Name) {
  return async (dispatch) => {
    try {
      dispatch(coursesAction.setLoading());
      await request.post(`/Video/AddAttachmentToVideo`, attachmentData);
      toast.success("تم اضافة الملحق");
    } catch (error) {
      toast.error(error.response.data.errors);
      console.log(error);
    } finally {
      dispatch(coursesAction.setVideoAttachment(Name));
      dispatch(coursesAction.setLoading());
    }
  };
}

export function getAttachmentByVideoId(videoId) {
  return async (dispatch) => {
    try {
      const { data } = await request.get(
        `/Video/AttachmentByVideoId?videoId=${videoId}`
      );
      dispatch(coursesAction.setVideoAttachment(data[0].name));
    } catch (error) {
      console.log(error);
    }
  };
}

export function deleteAttachment(attachmentId) {
  return async (dispatch) => {
    try {
      await request.delete(
        `/Video/DeleteAttachment?attachmentId=${attachmentId}`
      );
      dispatch(coursesAction.removeVideoAttachment());
      toast.success("تم حذف الملحق...");
    } catch (error) {
      console.log(error);
    }
  };
}
