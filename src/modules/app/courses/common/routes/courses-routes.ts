import RouteItem from "./../../../../../routing/route-item";
import CoursesRoutesUrls, { CoursesBaseRoute } from "./courses-routes-urls";
import CourseListingComponent from "./../../listing/course-listing.component";
import CourseEditComponent from "./../../edit/course-edit.component";

const CoursesRoutes: RouteItem = {
  path: CoursesBaseRoute,
  routes: [
    {
      path: CoursesBaseRoute,
      component: CourseListingComponent
    },
    {
      path: CoursesRoutesUrls.edit,
      component: CourseEditComponent
    }
  ]
};

export default CoursesRoutes;
