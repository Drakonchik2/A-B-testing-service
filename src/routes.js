import MainLayout from 'src/components/MainLayout';
import PrelandList from 'src/pages/PrelandList';
import Login from 'src/pages/Login';
import Addpreland from 'src/pages/Addpreland';
import OffersPage from 'src/pages/OffersPage';
import EditOffer from 'src/pages/EditOffer';
import AddOffer from 'src/pages/AddOffer';
const routes = [
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <Login /> },
      { path: 'prelands', element: <PrelandList /> },
      { path: 'addpreland', element: <Addpreland /> },
      { path: 'offer', element:<OffersPage/>},
      { path: 'addoffer', element:<AddOffer/>},
      { path: 'editoffer', element:<EditOffer/>}
    ]
  }
];

export default routes;
