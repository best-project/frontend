import LoginPage from '../pages/home/Login';
import RegisterPage from '../pages/home/Register';
import ForgotPasswordPage from '../pages/home/ForgotPassword';

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
];
