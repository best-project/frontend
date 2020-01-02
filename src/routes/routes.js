import LoginPage from '../pages/home/Login';
import RegisterPage from '../pages/home/Register';
import CoursesPage from '../pages/courses';
import SettingsPage from '../pages/settings';
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
        path: '/courses',
        component: CoursesPage,
        auth: true,
    },
    {
        path: '/settings',
        component: SettingsPage,
        auth: true,
    },
    {
        path: '/course/:courseId',
        component: CoursePage,
        auth: true,
    },
];
