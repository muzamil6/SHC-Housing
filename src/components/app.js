import React from 'react';
import { Router, Location, Redirect } from '@reach/router';
import ScrollToTopBtn from './menu/ScrollToTop';
import Header from './menu/header';
// import Home from './pages/home';
// import Home1 from './pages/home1';
import Home2 from './pages/home2';
// import Home3 from './pages/home3';
import Explore from './pages/explore';
import Explore2 from './pages/explore2';
import Rangking from './pages/rangking';
import Auction from './pages/Auction';
import Helpcenter from './pages/helpcenter';
import Colection from './pages/colection';
import ItemDetail from './pages/ItemDetail';
import Author from './pages/Author';
import Wallet from './pages/wallet';
import Login from './pages/login';
import LoginTwo from './pages/loginTwo';
import Register from './pages/register';
// import Price from './pages/price';
// import Works from './pages/works';
import News from './pages/news';
import Create from './pages/create';
import Create2 from './pages/create2';
import Create3 from './pages/create3';
import Createoption from './pages/createOptions';
import Activity from './pages/activity';
import Contact from './pages/contact';
// import ElegantIcons from './pages/elegantIcons';
// import EtlineIcons from './pages/etlineIcons';
// import FontAwesomeIcons from './pages/fontAwesomeIcons';
// import Accordion from './pages/accordion';
// import Alerts from './pages/alerts';
// import Progressbar from './pages/progressbar';
// import Tabs from './pages/tabs';
// import Addhouse from "./pages/addhouse"

import { createGlobalStyle } from 'styled-components';
import { LocationProvider } from '@reach/router';

const GlobalStyles = createGlobalStyle`
  :root {
    scroll-behavior: unset;
  }
`;

export const ScrollTop = ({ children, location }) => {
  React.useEffect(() => window.scrollTo(0, 0), [location])
  return children
}

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <div id='routerhang'>
        <div key={location.key}>
          <Router location={location}>
            {children}
          </Router>
        </div>
      </div>
    )}
  </Location>
);

const app = () => (
  <LocationProvider>

    <div className="wraper">
      <GlobalStyles />
      <Header />
      <PosedRouter>
        <ScrollTop path="/">
          <Home2 exact path="/">
            {/* <Home2 path="/home2" /> */}
            <Redirect to="/home" />
          </Home2>
          {/* <Home1 path="/home1" /> */}
          {/* <Home3 path="/home3" /> */}
          <Explore path="/explore" />
          {/* <Addhouse path="/addhouse" /> */}
          <Explore2 path="/explore2" />
          <Rangking path="/rangking" />
          <Auction path="/Auction" />
          <Helpcenter path="/helpcenter" />
          <Colection path="/colection" />
          <ItemDetail path="/ItemDetail" />
          <Author path="/Author" />
          <Wallet path="/wallet" />
          <Login path="/login" />
          <LoginTwo path="/loginTwo" />
          <Register path="/register" />
          {/* <Price path="/price" /> */}
          {/* <Works path="/works" /> */}
          <News path="/news" />
          <Create path="/create" />
          <Create2 path="/create2" />
          <Create2 path="/create3" />
          <Createoption path="/createOptions" />
          <Activity path="/activity" />
          <Contact path="/contact" />
          {/* <ElegantIcons path="/elegantIcons" /> */}
          {/* <EtlineIcons path="/etlineIcons" /> */}
          {/* <FontAwesomeIcons path="/fontAwesomeIcons" /> */}
          {/* <Accordion path="/accordion" /> */}
          {/* <Alerts path="/alerts" /> */}
          {/* <Progressbar path="/progressbar" /> */}
          {/* <Tabs path="/tabs" /> */}
        </ScrollTop>
      </PosedRouter>
      <ScrollToTopBtn />

    </div>
  </LocationProvider>
);
export default app;