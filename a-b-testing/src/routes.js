import MainLayout from 'src/components/MainLayout';
import PrelandList from 'src/pages/PrelandList';
import Login from 'src/pages/Login';

const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'prelands', element: <PrelandList /> }
    ]
  }
];

export default routes;
