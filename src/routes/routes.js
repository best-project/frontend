import LoginPage from '../pages/home/Login';
import RegisterPage from '../pages/home/Register';
import ForgotPasswordPage from '../pages/home/ForgotPassword';
import CoursesPage from '../pages/courses';
import SettingsPage from '../pages/settings';
import FaceobokLoginPage from '../pages/home/FacebookLogin';
import CoursePage from '../pages/course';

export const routes = [
    {
        path: '/',
        component: LoginPage,
    },
    {
        path: '/register',
        component: RegisterPage,
    },
    {
        path: '/forgot',
        component: ForgotPasswordPage,
    },
    {
        path: '/courses',
        component: CoursesPage,
        auth: true,
    },
    {
        path: '/facebook-login',
        component: FaceobokLoginPage,
    },
    {
        path: '/settings',
        component: SettingsPage,
    },
    {
        path: '/course/:courseId',
        component: CoursePage,
    },
];
