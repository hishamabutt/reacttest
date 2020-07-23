import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from './NavbarComponent';
import {
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormText,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';

function Login(props) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [validate, setValidate] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (email === 'test@test.com' && password === '123456') {
      setRedirect(true);
    } else {
      setValidate(true);
    }
  };

  if (redirect) {
    return <Redirect to='/products' />;
  }

  return (
    <div>
      <Navbar type={'login'} />

      <h2
        style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}
      >
        Sign In
      </h2>
      <Form className='login-form' onSubmit={(e) => onSubmit(e)}>
        <Col>
          <FormGroup>
            <Label>Email</Label>
            <Input
              type='email'
              name='email'
              id='exampleEmail'
              placeholder='Email'
              value={email}
              onChange={(e) => onChange(e)}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for='examplePassword'>Password</Label>
            <Input
              type='password'
              name='password'
              id='examplePassword'
              placeholder='Password'
              value={password}
              onChange={(e) => onChange(e)}
              required
            />
          </FormGroup>
        </Col>
        {validate && (
          <FormText
            style={{
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '10px',
              color: 'danger',
            }}
          >
            Invalid Credentials.
          </FormText>
        )}
        <Button className='btn-block'>Submit</Button>
      </Form>
    </div>
  );
}

Login.propTypes = {};

export default Login;
