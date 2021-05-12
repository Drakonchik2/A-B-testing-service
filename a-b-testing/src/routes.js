import MainLayout from 'src/layouts/MainLayout';
import PrelandList from 'src/pages/PrelandList';
import Login from 'src/pages/Login';
import Addpreland from 'src/pages/Addpreland';
import DashboardLayout from 'src/layouts/DashboardLayout';

const routes = [
  {
    path:'',
    element: <Login />
  },
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'prelands', element: <PrelandList />},
      { path: 'addpreland', element: <Addpreland /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      
    ]
  } 
];



export default routes;
