import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    courseVideos: [],
    numberOfCourses: 0,
    isOpenedCourse: false,
    isOpenedVideo: false,
    isOpenedAttachment: true,
    loading: false,
    deleteLoading: false,
    videoSrc: null,
    videoData: null,
    videoAttachment: null,
    helperName: null,
  },
  reducers: {
    setCourses(state, action) {
      state.courses = action.payload;
    },
    setNumberOfCourses(state, action) {
      state.numberOfCourses = action.payload;
    },
    removeCourse(state, action) {
      const courseId = action.payload;
      state.courses = state.courses.filter((course) => course.id !== courseId);
      state.numberOfCourses--;
    },
    setIsOpenedCourse(state) {
      state.isOpenedCourse = !state.isOpenedCourse;
    },
    setLoading(state) {
      state.loading = !state.loading;
    },
    setCourseVideos(state, action) {
      state.courseVideos = action.payload;
    },
    setVideoSrc(state, action) {
      state.videoSrc = action.payload;
    },
    removeVideoSrc(state) {
      state.videoSrc = null;
    },
    setDeleteLoading(state) {
      state.deleteLoading = !state.deleteLoading;
    },
    setVideoData(state, action) {
      state.videoData = action.payload;
    },
    removeVideoData(state) {
      state.videoData = null;
    },
    setVideoAttachment(state, action) {
      state.videoAttachment = action.payload;
    },
    removeVideoAttachment(state) {
      state.videoAttachment = null;
    },
    setHelperName(state, action) {
      state.helperName = action.payload;
    },
    setIsOpenedVideo(state) {
      state.isOpenedVideo = !state.isOpenedVideo;
    },
    setIsOpenedAttachment(state) {
      state.isOpenedAttachment = !state.isOpenedAttachment;
    },
  },
});

const coursesReducer = coursesSlice.reducer;
const coursesAction = coursesSlice.actions;

export { coursesReducer, coursesAction };
