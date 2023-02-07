import { Box, Button, Container, TextField } from '@mui/material';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../components/Header';

const Login = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');

  const handleSendCode = (e) => {
    if (phone === '') {
      toast.error('Please enter a phone number');
    } else {
      toast.success('A six-digit code has been sent to your device.');
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (phone === '' || code === '') {
      toast.error('Please enter all the required fields');
    } else {
      toast.success('Complete registered!');
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
          margin: '20px',
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
