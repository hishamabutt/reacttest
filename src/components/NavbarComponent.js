import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function NavbarComponent(props) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color='light' light expand='md'>
        <NavbarBrand href='/'>Assignment</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          {props.type == 'login' ? (
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/register'>Sign Up</NavLink>
              </NavItem>
            </Nav>
          ) : (
            <div>
              {props.type === 'register' ? (
                <Nav className='mr-auto' navbar>
                  <NavItem>
                    <NavLink href='/'>Login</NavLink>
                  </NavItem>
                </Nav>
              ) : (
                <div>
                  {props.type === 'products' ? (
                    <Nav className='mr-auto' navbar>
                      <NavItem>
                        <NavLink href='/selected'>Cart</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href='/'>Logout</NavLink>
                      </NavItem>
                    </Nav>
                  ) : (
                    <Nav className='mr-auto' navbar>
                      <NavItem>
                        <NavLink href='/products'>Products</NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink href='/'>Logout</NavLink>
                      </NavItem>
                    </Nav>
                  )}
                </div>
              )}
            </div>
          )}
        </Collapse>
      </Navbar>
    </div>
  );
}

NavbarComponent.propTypes = {};

export default NavbarComponent;
