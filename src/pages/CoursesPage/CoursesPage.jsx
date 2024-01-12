import "./CoursesPage.css";
import Header from "../../components/Header/Header";
import { Pagination } from "../../components/Pagination/Pagination";
import CourseItem from "../../components/CourseItem/CourseItem";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { deleteCourse, getCourses } from "../../redux/apiCalls/coursesApiCall";
import { Link } from "react-router-dom";
import CourseLayout from "../../components/CourseLayout/CourseLayout";
import { coursesAction } from "../../redux/slices/coursesSlice";
import { RotatingLines } from "react-loader-spinner";
const COURSE_PER_PAGE = 3;
const CoursesPage = () => {
  const dispatch = useDispatch();
  const { courses, numberOfCourses, isOpenedCourse, deleteLoading } =
    useSelector((state) => state.course);

  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(numberOfCourses / COURSE_PER_PAGE);
  useEffect(() => {
    dispatch(getCourses(currentPage, COURSE_PER_PAGE));
    dispatch(coursesAction.removeVideoSrc());
    dispatch(coursesAction.removeVideoAttachment());
  }, [currentPage, dispatch]);
  return (
    <div className="coursesPage">
      {isOpenedCourse && (
        <CourseLayout
          currentPage={currentPage}
          coursePerPage={COURSE_PER_PAGE}
        />
      )}
      <Header
        src={"/assests/allCourses.png"}
        headerName={"الكورسات"}
        yes={true}
        nameNumber={"جميع الكورسات"}
        number={numberOfCourses}
        functionClick={() => {
          dispatch(coursesAction.setIsOpenedCourse());
        }}
        buttonName={"اضافة كورس جديد"}
      />

      <div className="courses-container">
        {courses.map((row, index) => (
          <div className="courses-container-item" key={index}>
            <Link to={`/course/${row.id}`}>
              <CourseItem
                src={`http://architechproj-001-site1.anytempurl.com/${row.courseImg}`}
                // src={false}
                courseName={row.courseName}
                createdAt={row.createdAt}
                numberOfVideos={row.driveVideoIds.length}
              />
            </Link>
            {deleteLoading ? (
              <div className="delete-course">
                <RotatingLines
                  strokeColor="rgb(214, 76, 115)"
                  visible={true}
                  height="20"
                  width="20"
                  color="rgb(214, 76, 115)"
                  strokeWidth="5"
                  animationDuration="0.75"
                  ariaLabel="rotating-lines-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                />
              </div>
            ) : (
              <div
                className="delete-course"
                onClick={() => {
                  dispatch(deleteCourse(row.id, currentPage, setCurrentPage));
                }}
              >
                حذف هذا الكورس
              </div>
            )}
          </div>
        ))}
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default CoursesPage;
