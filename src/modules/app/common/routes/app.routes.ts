import RouteItem from "./../../../../routing/route-item";
import HomeComponent from "./../../home/home.component";
import LoginComponent from "./../../login/login.component";
import RegisterComponent from "./../../register/register.component";
import CourseListingComponent from '../../courses/listing/course-listing.component';
import CoursesRoutes from 'modules/app/courses/common/routes/courses-routes';

const AppRoutes: RouteItem = {
  path: "",
  routes: [
    {
      path: "/",
      component: HomeComponent,
      exact: true
    },
    {
      path: "/login",
      component: LoginComponent
    },
    {
      path: "/register",
      component: RegisterComponent
    },
    CoursesRoutes
  ]
};

export default AppRoutes;
