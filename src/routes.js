import {Navigate} from 'react-router-dom';
import DashboardLayout from 'src/components/DashboardLayout';
import OffersPage from 'src/Offers_page/OffersPage';
import AddOffer from 'src/Offers_page/Add'

const routes =[
{
    path: 'app',
    element: <DashboardLayout/>,
    children :[
        {
          path: 'Offers', 
          element: <OffersPage/>,
          children:[
            {
              path: 'Add',
              element: <AddOffer/>
            }
          ]
        }
      ]
}
];


export default routes;