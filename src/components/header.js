import React from 'react';
import { NavLink } from 'react-router-dom';
import {
    Collapse,
    Nav,
    Navbar,
    NavItem,
    NavLink as BSNavLink,
    Container,Row,Col
  } from 'reactstrap';

  const navItems = [
    { to: '/', name: 'Home', exact: true, },
    { to: '/Features', name: 'Features', exact: false, },
    { to: '/Benefits', name: 'Benefits', exact: false, },
    { to: '/Pricing', name: 'Pricing', exact: false, },
    { to: '/CustomerShopping', name: 'Customer Shopping', exact: false, },
    { to: '/Blog', name: 'Blog', exact: false, },
    { to: '/contact', name: 'contact us', exact: false, },
  ];

class Header extends React.Component {

render(){
    return(
      <div className="menu">
           <Container>
              <Row>
                  <Col sm={2}>
                  <a className="navbar-brand1" href="/">
                    <img src={'http://airguides.co.uk/wp-content/uploads/2019/05/cropped-air_guide_logo.png'} alt="logo" />                  
                    </a>
                  </Col> 
                  <Col sm={8}>
                  <Nav>
                    {navItems.map(({ to, name, exact, Icon }, index) => (
                      <NavItem key={index} className="header-menu">
                        <BSNavLink
                          id={`navItem-${name}-${index}`}
                          className="menu-item"
                          tag={NavLink}
                          to={to}
                          activeClassName="active"
                          exact={exact}
                        >
                          <span className="">{name}</span>
                        </BSNavLink>
                      </NavItem>
                      ))}
                    </Nav>
                  </Col>
                  <Col sm={2}>

                  </Col>
                </Row>
            </Container>
        </div>
     
                    

    )
}
}

export default Header;