import { createSlice } from "@reduxjs/toolkit";

const coursesSlice = createSlice({
  name: "courses",
  initialState: {
    courses: [],
    courseVideos: [],
    numberOfCourses: 0,
    isOpenedCourse: false,
    loading: false,
    videoSrc: null,
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
  },
});

const coursesReducer = coursesSlice.reducer;
const coursesAction = coursesSlice.actions;

export { coursesReducer, coursesAction };
