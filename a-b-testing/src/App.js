import 'react-perfect-scrollbar/dist/css/styles.css';
import { ThemeProvider } from '@material-ui/core';
import GlobalStyles from 'src/components/GlobalStyles';
import theme from 'src/theme';
import Login from 'src/pages/Login';
import MainLayout from 'src/components/MainLayout';

const App = () => {
  
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Login />
      <MainLayout />
    </ThemeProvider>
  );
};

export default App;
