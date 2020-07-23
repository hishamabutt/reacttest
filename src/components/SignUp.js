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

function SignUp(props) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [validate, setValidate] = useState(0);

  const { email, password, name, confirmPassword } = formData;

  const onChange = (e) => {
    setValidate(0);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if ((email != '' && password != '' && name != '', confirmPassword != '')) {
      setValidate(1);
      setFormData({
        ...formData,
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      setValidate(2);
    }
  };
  return (
    <div>
      <Navbar type={'register'} />
      <h2
        style={{ textAlign: 'center', marginTop: '50px', marginBottom: '20px' }}
      >
        Sign Up
      </h2>
      <Form className='login-form' onSubmit={(e) => onSubmit(e)}>
        <Col>
          <FormGroup>
            <Label for='name'>Name</Label>
            <Input
              type='name'
              name='name'
              id='name'
              placeholder='Name'
              value={name}
              onChange={(e) => onChange(e)}
              required
            />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <Label for='examplePassword'>Email</Label>
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
        <Col>
          <FormGroup>
            <Label for='confirmPassword'>Confirm Password</Label>
            <Input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              placeholder='Password'
              value={confirmPassword}
              onChange={(e) => onChange(e)}
              required
            />
          </FormGroup>
        </Col>
        {validate === 1 && (
          <FormText
            style={{
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '10px',
              color: 'danger',
            }}
          >
            User Added
          </FormText>
        )}
        {validate === 2 && (
          <FormText
            style={{
              textAlign: 'center',
              marginTop: '10px',
              marginBottom: '10px',
              color: 'danger',
            }}
          >
            Some Error
          </FormText>
        )}
        <Button className='btn-block'>Submit</Button>
      </Form>
    </div>
  );
}

SignUp.propTypes = {};

export default SignUp;
