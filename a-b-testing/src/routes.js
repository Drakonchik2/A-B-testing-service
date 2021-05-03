import MainLayout from 'src/components/MainLayout';
import PrelandList from 'src/pages/PrelandList';
import Login from 'src/pages/Login';
import Addpreland from 'src/pages/Addpreland';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'prelands', element: <PrelandList /> },
      { path: 'addpreland', element: <Addpreland /> }
    ]
  }
];

export default routes;
