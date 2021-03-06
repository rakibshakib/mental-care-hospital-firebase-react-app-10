import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AuthProvider from './context/AuthProvider'
import Home from './pages/Home/Home';
import NotFound from './components/NotFound/NotFound'
import DetailsService from './components/DetailsService/DetailsService';
import Navbar from './components/Navbar/Navbar';
import LoginUser from './components/LoginUser/LoginUser'
import RegisterUser from './components/RegisterUser/RegisterUser';
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import AboutUS from './components/AboutUS/AboutUS';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Navbar />
          <Switch>
            <Route path='/home'>
              <Home />
            </Route>
            <Route exact path='/'>
              <Home />
            </Route>
            <PrivateRoute exact path='/service/:id'>
              <DetailsService />
            </PrivateRoute>
            <Route exact path='/login'>
              <LoginUser />
            </Route>
            <Route exact path='/about'>
              <AboutUS/>
            </Route>
            <Route exact path='/contact'>
              <Contact/>
            </Route>
            <PrivateRoute exact path='/booking'>
              <Booking/>
            </PrivateRoute>
            <Route exact path='/register'>
              <RegisterUser />
            </Route>
            <Route path='*'>
              <NotFound />
            </Route>
          </Switch>
          <Footer/>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
