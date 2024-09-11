import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import Donation from '../pages/Donation';
import JobPortal from '../pages/JobPortal';
import NetworkHub from '../pages/NetworkHub';
import EventsReunion from '../pages/EventsReunion';


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
            }
        ]
    }
]);

export default router;