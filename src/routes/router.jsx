import { createBrowserRouter, Navigate } from 'react-router-dom';
import AuthLayout from '../components/layout-component/AuthLayout';
import HomeLayout from '../layouts/HomeLayout';
import CategoryNews from '../pages/CategoryNews';
import Login from '../pages/Login';
import NewsDetails from '../pages/NewsDetails';
import Register from '../pages/Register';
import PrivetRoute from './PrivetRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        children: [
            {
                path: '',
                element: <Navigate to={'/category/01'}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryNews />,
                loader: ({ params }) => fetch(` https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/news/:id',
        element: (
            <PrivetRoute>
                <NewsDetails />
            </PrivetRoute>
        ),
        loader: ({ params }) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: '/auth/login',
                element: <Login />
            },
            {
                path: '/auth/register',
                element: <Register />
            }
        ]
    },
    {
        path: '/auth',
        element: <h1>Login</h1>
    },
    {
        path: '*',
        element: <h1>Error</h1>
    }
]);

export default router;
