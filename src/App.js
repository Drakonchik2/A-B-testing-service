import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import OffersPage from './Offer/OffersPage';
import AddForm from './Offer/AddOffer';
import EditForm from './Offer/Edit';
import {ThemeProvider} from '@material-ui/core';
import GlobalStyles from './components/GlobalStyles';
import theme from './theme';

function App() {

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles/>
    <Router>
      <Route path="/">
        <div>Dashboard</div>
      </Route>
      <Route path="/offer">
        <OffersPage/>
      </Route>
      <Route path="/add">
        <AddForm/>
      </Route>
      <Route path="/edit">
        <EditForm/>
        </Route>
    </Router>
    </ThemeProvider>
  );
}
export default App;
