import { Box, Button, Container, TextField } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleSendCode = async (e) => {
    try {
      if (phone === '') {
        toast.error('Please enter a phone number');
      } else {
        const res = await axios.post('http://localhost:3001/api/create-code', {
          phoneNumber: phone,
        });

        console.log(res.data);

        if (res.status === 200) {
          toast.success('A code has been sent to your phone!');
        }
      }
    } catch (error) {
      toast.error(
        'Something went wrong, please check your phone number and try again!'
      );
    }
  };

  const handleFormSubmit = async (e) => {
    try {
      e.preventDefault();
      if (phone === '' || code === '') {
        toast.error('Please enter all the required fields');
      } else {
        const res = await axios.post(
          'http://localhost:3001/api/validate-code',
          {
            phoneNumber: phone,
            accessCode: code,
          }
        );

        console.log(res.data);

        if (res.status === 200) {
          toast.success('You have successfully logged in!');
        }
      }
    } catch (error) {
      toast.error('Your code is incorrect, please try again!');
    }
  };

  return (
    <div>
      <Header />
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <h1>Register</h1>

        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{
            width: 400,
            display: 'flex',
            flexDirection: 'column',
            gap: 5,
          }}
          onSubmit={handleFormSubmit}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '40px',
            }}
          >
            <TextField
              required
              id="outlined-required"
              label="Phone number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
            <Button variant="contained" size="large" onClick={handleSendCode}>
              Send Code
            </Button>
          </Box>

          <TextField
            required
            id="outlined-required"
            label="Access code"
            onChange={(e) => setCode(e.target.value)}
            value={code}
            inputProps={{
              maxLength: 6,
              minLength: 1,
            }}
          />
          <Button variant="contained" size="large" type="submit">
            Submit
          </Button>
        </Box>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default Login;
