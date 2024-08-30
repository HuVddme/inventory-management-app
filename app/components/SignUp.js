// /app/components/SignUp.js
'use client'

import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, firestore } from '@/app/firebase';
import { doc, setDoc } from 'firebase/firestore';

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSignUp = async () => {
    try {
      // Create a new user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save the user's email in Firestore
      await setDoc(doc(firestore, 'users', user.uid), {
        email: user.email,
      });

      setSuccess('User registered successfully!');
      setError('');
    } catch (err) {
      setError(err.message);
      setSuccess('');
    }
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={2}
    >
      <Typography variant="h4" sx={{ color: 'white' }}>
        Sign Up
      </Typography>

      <Typography variant="body2" sx={{ color: 'white' }}>
      Already have an account? <a href="/login" style={{ color: 'lightblue' }}>Log In</a>
      </Typography>

      <TextField
        label="Email"
        variant="outlined"
        fullWidth
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        InputProps={{
          sx: {
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
            },
          },
        }}
        sx={{
          '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
          },
        }}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        InputProps={{
          sx: {
            '& .MuiInputBase-input': {
              color: 'white',
            },
            '& .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              borderColor: 'white',
            },
          },
        }}
        InputLabelProps={{
          sx: {
            color: 'white',
            '&.Mui-focused': {
              color: 'white',
            },
          },
        }}
        sx={{
          '& .MuiInputBase-input::placeholder': {
            color: 'white',
            opacity: 1,
          },
        }}
      />
      {error && (
        <Typography color="error">
          {error}
        </Typography>
      )}
      {success && (
        <Typography color="primary">
          {success}
        </Typography>
      )}
      <Button variant="contained" onClick={handleSignUp}>
        Sign Up
      </Button>
    </Box>
  );
}
