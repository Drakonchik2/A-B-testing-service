import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OffersPage from './Offer/OffersPage';
import AddOffer from './Offer/AddOffer';
function App() {

  return (
    <Router>
      <Route path="/">
        <div>Dashboard</div>
      </Route>
      <Route path="/offer">
        <OffersPage/>
      </Route>
      <Route exact path="/add">
        <AddOffer/>
      </Route>
    </Router>
  );
}

export default App;
