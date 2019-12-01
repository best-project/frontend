import LoginPage from '../pages/home/Login';
import RegisterPage from '../pages/home/Register';
import ForgotPasswordPage from '../pages/home/ForgotPassword';
import CoursesPage from '../pages/courses/Courses';

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
    // {
    //     path: '/facebook-login',
    //     component: null,
    // },
];
