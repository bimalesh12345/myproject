import React, { Component } from 'react';
import './App.css';

import Index from './page/index';
import Features from './page/Features';
import Pricing from './page/Pricing';
import CustomerShopping from './page/CustomerShopping';
import Benefits from './page/Benefits';
import Blog from './page/Blog';
import Contact from './page/contact';
import LayoutRoute from './components/LayoutRoute';
import MainLayout from './components/MainLayout';
import 'bootstrap/dist/css/bootstrap.css';




import { BrowserRouter as Router, Redirect, Switch } from 'react-router-dom';


const getBasename = () => {
 
  return `/${process.env.PUBLIC_URL.split('/').pop()}`;
};



class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      currentUser: null,
    }
    
  }
  
  render() {

    return (
     <div className="myapp">
     <Router basename={getBasename()}>
        <Switch>
          <LayoutRoute
              exact
              path="/"
              layout={MainLayout}
              component={Index}
            />
            <LayoutRoute
              exact
              path="/Features"
              layout={MainLayout}
              component={Features}
            />
             <LayoutRoute
              exact
              path="/CustomerShopping"
              layout={MainLayout}
              component={CustomerShopping}
            />
             <LayoutRoute
              exact
              path="/Pricing"
              layout={MainLayout}
              component={Pricing}
            />
             <LayoutRoute
              exact
              path="/Benefits"
              layout={MainLayout}
              component={Benefits}
            />
             <LayoutRoute
              exact
              path="/Blog"
              layout={MainLayout}
              component={Blog}
            />
            <LayoutRoute
              exact
              path="/contact"
              layout={MainLayout}
              component={Contact}
            />
           </Switch>
       </Router>
     </div>
    );
  }
}



export default App;

