import CoursesRoutesUrls from "./courses-routes-urls";

class CoursesRoutesHelperService {
  getEditCourseRoute(courseId: string): string {
    return CoursesRoutesUrls.edit.replace(":courseId", courseId);
  }
}

const coursesRoutesHelperService = new CoursesRoutesHelperService();
export default coursesRoutesHelperService;
