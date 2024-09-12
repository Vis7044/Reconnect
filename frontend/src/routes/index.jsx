import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import JobPortal from '../pages/JobPortal';
import NetworkHub from '../pages/NetworkHub';
import EventsReunion from '../pages/EventsReunion';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Profile from '../pages/Profile';


const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '',
                element: <Home/>
            },
            {
                path: '/donation',
                element: <Donation/>
            },
            {
                path: '/job-portal',
                element: <JobPortal/>
            },
            {
                path: '/network-hub',
                element: <NetworkHub/>
            },
            {
                path: '/events-reunions',
                element: <EventsReunion/>
            },
            {
                path: '/sign-up',
                element: <Signup/>
            },
            {
                path: '/login',
                element: <Login/>

            },
            {
                path: '/profile',
                element: <Profile/>
            }
        ]
    }
]);

export default router;